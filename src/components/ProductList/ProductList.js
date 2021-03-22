import React, {useContext, useEffect, useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


import {GlobalContext} from '../../contexts/GlobalState'
import {imgUrlBase} from '../../utils/api';

import './ProductList.css';



const ProductListComp = () => {
    const {vehicles, loading, error, getVehicles, locationChange} = useContext(GlobalContext);

    //States used for Event Handlers
    const [minToMax, setMinToMax] = useState(true);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(()=>{
        locationChange();
        getVehicles();
        // eslint-disable-next-line
    },[])

    
    //Event Handlers
    const handleClickOrdering = () => {
        if (minToMax){
            vehicles.sort((a, b) => b.amount-a.amount);
            setMinToMax(false);
        }
        else{
            vehicles.sort((a, b) => b.amount-a.amount).reverse();
            setMinToMax(true);
        }
    }
    
    const toggleShowFilterPanel = () => {
        const currentShown = showFilters;
        setShowFilters(!currentShown);
    }
    
    //Individual Vehicle Card
    const vehicleCards = vehicles.map((veh) => {
        return(
            <Card className="col-12 col-md-3" key={veh.id}>
                    <CardImg top width="100%" src={`${imgUrlBase}${veh.detail.main_image.large}`} alt={veh.model} />
                    <CardBody>
                    <CardTitle tag="h5">Nissan {veh.model}</CardTitle>
                    <hr />
                    <CardSubtitle tag="h6" className=" text-muted">Precio desde: <span>US$ {new Intl.NumberFormat("de-DE").format(veh.amount)}</span></CardSubtitle>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <div id="car-engine" className="d-flex flex-column">
                            <i className="fas fa-wrench" />
                            <p>{veh.detail.characteristics.engine}</p>
                        </div>
                        <div id="car-body" className="d-flex flex-column">
                        <i className="fas fa-car-side" />
                            <p>{veh.detail.characteristics.body.split("-")[1]}</p>
                        </div>
                        <div id="car-fuel" className="d-flex flex-column">
                            <i className="fas fa-gas-pump" />
                            <p>{veh.detail.characteristics.gas_type}</p>
                        </div>
                    </div>
                    <CardText className="text-muted" ><small>{veh.detail.description}</small></CardText>
                    <Button href={`/car/${veh.id}`} className="inner-card-button">Mostrar detalles y solicitar Cotización</Button>
                    </CardBody>
                </Card>
        )
    })

    //Rendering loading spinner and error message.
    if(loading){
        return(<div id="product-list-container"><p>Loading...</p></div>)
    }
    if(error){
        return(<div id="product-list-container"><p>{error}</p></div>)
    }
    

    return(
        <div id="product-list-container">
            <div id="slogan-banner">
                <p>¿Cuál es tu auto soñado?</p>
            </div>


           <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
               {/* Conditional Renderings */}
               {!showFilters && 
               <div className="container d-flex  justify-content-end mt-3" id="closed-filter-panel">
                <Button onClick={handleClickOrdering} className="apply-filter-button">Ordenar por $: {minToMax ? "Descend.": "Ascend."}</Button>
                <Button onClick={toggleShowFilterPanel} className="open-filter-button ml-2">Filtros</Button>
                </div>
               }
               {/* TODO: Implementing filters */}
               {showFilters && 
                    <div className="row mt-2 d-flex justify-content-around" id="filter-order-row">
                        <fieldset className="col-12 ">
                            <legend>Filtros</legend>
                            <div>
                            Motor: <select name="motors" defaultValue="">
                                <option value="" disabled hidden>Elegí</option>
                                <option value="Motor 1.6">1.6</option>
                                <option value="Motor 2.0">2.0</option>
                                <option value="Motor 2.5">2.5</option>
                            </select>
                            </div>
                            <div>
                            Tipo: <select name="body" defaultValue="" >
                                <option value="" disabled hidden>Elegí</option>
                                <option value="Hatch">Hatch</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Pick Up">Pick Up</option>
                                <option value="SUV">SUV</option>
                            </select>
                            </div>
                                <hr />
                                <small className="text-muted">{vehicles.length} vehículos encontrados - funcionalidad no agregada todavia  </small>
                                <hr />
                        </fieldset>
                        <Button className="apply-filter-button">Borrar filtros</Button>
                        <Button className="col-3 open-filter-button" onClick={toggleShowFilterPanel}>Cerrar</Button>
                    </div>
                }


               <div className="row d-flex justify-content-center" id="cards-row">
                    {vehicleCards}
               </div>
           </div>

        </div>
    )
}

export default ProductListComp;

