import React, {useEffect, useContext, useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import {
    Breadcrumb, 
    BreadcrumbItem,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Table,
    Badge
  } from 'reactstrap';


import ContactForm from './ContactForm/ContactForm';

import {GlobalContext} from '../../contexts/GlobalState';
import {imgUrlBase} from '../../utils/api';

import './ProductDetail.css';

const ProductDetailComp = () => {
    const {id} = useParams();

    const { loading, error, vehicleById, getVehicleById, locationChange } = useContext(GlobalContext);

    useEffect(()=>{
        locationChange();
       getVehicleById(id);
        //eslint-disable-next-line
    },[])
    

    //Conditional rendering for loading spinner or error msg
    if(loading){
        return(<div id="product-detail-container"><p>Loading...</p></div>)
    }
    if(error){
        return(<div id="product-detail-container"><p>{error}</p></div>)
    }
    

    
    return(
        <div id="product-detail-container">
            <div className="container-fluid">
                <div className="row" >
                    <Breadcrumb id="breadcrumb">
                        <BreadcrumbItem><Link to="/store"><i className="fas fa-chevron-circle-left"/>&nbsp; Volver a la Tienda</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Nissan {vehicleById.model}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row d-flex flex-column justify-content-center align-items-center text-center">
                    <h1>NISSAN {vehicleById.model}</h1>
                    <div>
                        <Badge>Precio: US${new Intl.NumberFormat("de-DE").format(vehicleById.amount)}</Badge>
                    </div>
                    <h5 className="text-muted"><em>{vehicleById.detail.main_description}</em></h5>
                    <a href="#contact-info" id="more-info">Solicitar más información</a>

                </div>
                <div className="container d-flex flex-column align-items-center justify-content-center">
                        <VehicleCarousel vehicleById={vehicleById}/>
                        <VehicleTable vehicleById={vehicleById} />
                </div>
                <div className="container">
                    <div className="row d-flex flex-column justify-content-center align-items-center text-center" id="contact-info">
                            <ContactForm vehicleById={vehicleById} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const VehicleCarousel = ({vehicleById}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const items = vehicleById.gallery.map((photo) => {
        return {src: `${imgUrlBase}${photo.large}`, altText: vehicleById.model}
    })


    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
const VehicleTable = ({vehicleById}) => {
    //sliced string to avoid responsive issues on very narrow screens (e.g. Galaxy Fold width: 280).slice(0,25)
    const featuresList = vehicleById.specs.technical_details.features.split(";")
        .map((feat) => {
            return(
                <li key={feat}>{feat}</li>
            )
        })

    const coloresList = vehicleById.detail.colors.map((color) => {
        return(
            <li className="list-inline-item" key={color.code}>
                <div className="vehicle-color" style={{background:`#${color.hex}`, height:"30px", width:"30px", borderRadius:"50%", boxShadow:"1px 1px 3px rgba(0,0,0,0.5)"}} id={color.code}>
                </div> 
            </li>
        )
    })

    return(
        <>
            <Table className="d-none d-md-table">
                <thead>
                    <tr>
                        <th>Clase</th>
                        <th>Caracteristicas</th>
                        <th>Transmisión</th>
                        <th>Colores Disponibles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{vehicleById.specs.technical_details.body}</td>
                        <td><ul>{featuresList}</ul></td>
                        <td>{vehicleById.specs.technical_details.transmission}</td>
                        <td><ul className="list-inline" >{coloresList}</ul></td>

                    </tr>
                </tbody>
            </Table>
            <Table className="d-md-none table-striped">
                <tbody>
                    <tr>
                        <td><strong>Clase:</strong><br />{vehicleById.specs.technical_details.body}</td>
                    </tr>
                    <tr>
                        <td><strong>Caracteristicas:</strong><br /><ul>{featuresList}</ul></td>
                    </tr>
                    <tr>
                        <td><strong>Transimisión:</strong><br />{vehicleById.specs.technical_details.transmission}</td>
                    </tr>
                    <tr>
                        <td><strong>Colores Disponibles:</strong><br /><ul className="list-inline" >{coloresList}</ul></td>
                    </tr>
                </tbody>
                
            </Table>
        </>
    )
}

export default ProductDetailComp;
