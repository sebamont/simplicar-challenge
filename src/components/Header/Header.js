import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Header.css'


//Owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//IMPORT STATIC PHOTOS
import nissanLandscape from '../../static/images/nissanLandscape.jpg';
import nissanHigh from '../../static/images/nissanHigh.jpg';

//importing car brands imgs for owl carousel
import alfaRomeo from '../../static/images/car brands/alfaRomeo.png';
import audi from '../../static/images/car brands/audi.png';
import bmw from '../../static/images/car brands/bmw.png';
import chevrolet from '../../static/images/car brands/chevrolet.png';
import citroen from '../../static/images/car brands/citroen.png';
import fiat from '../../static/images/car brands/fiat.png';
import ford from '../../static/images/car brands/ford.png';
import honda from '../../static/images/car brands/honda.png';
import hyundai from '../../static/images/car brands/hyundai.png';
import kia from '../../static/images/car brands/kia.png';
import mercedesBenz from '../../static/images/car brands/mercedesBenz.png';
import nissan from '../../static/images/car brands/nissan.png';
import peugeot from '../../static/images/car brands/peugeot.png';
import renault from '../../static/images/car brands/renault.png';
import toyota from '../../static/images/car brands/toyota.png';
import volkswagen from '../../static/images/car brands/volkswagen.png';

const HeaderComp = () => {
    return(
        <div id="header-container">
            <picture>
                <source srcSet={nissanLandscape} media="(orientation: landscape)" />
                <source srcSet={nissanHigh}  />
                <img srcSet={nissanHigh} alt="Nissan Luxury Cars" />
            </picture>

            <div id="jumbotron-container">
                <HeaderJumbotron />
            </div>

            <div id="carousel-container">
                <HeaderCarousel />
            </div>
        </div>
    )
}

const HeaderJumbotron = () => {
    return(
        <Jumbotron>
                <h1 className="display-5">TU PRÓXIMO AUTO, ONLINE</h1>
                <p>Las mejores marcas, modelos y precios. Entrá y solicitá una cotización</p>
                <Button tag={Link} to="/store">Ingresá al Store <span><i className="fas fa-arrow-circle-right"></i></span> </Button>
            </Jumbotron>
    )
}


let carBrands = [
    {name: "Nissan", source: nissan}, 
    {name: "Toyota", source: toyota}, 
    {name:"Citroen", source: citroen},
    {name:"Volkswagen", source: volkswagen},
    {name:"Audi", source: audi},
    {name:"BMW", source: bmw},
    {name:"Chevrolet", source: chevrolet},
    {name:"Peugeot", source: peugeot},
    {name:"Alfa Romeo", source: alfaRomeo},
    {name:"Honda", source: honda},
    {name:"Hyundai", source: hyundai},
    {name:"Mercedes-Benz", source: mercedesBenz},
    {name:"Fiat", source: fiat},
    {name:"Kia", source: kia},
    {name:"Ford", source: ford},
    {name:"Renault", source: renault},
]


const HeaderCarousel = () => {

    const carBrandList = carBrands.map((brand) => {
        return(
            <div className="item" key={brand.name}>
                    <img src={brand.source} alt={brand.name} />
            </div>
        )
    })

    const carouselOptions = {
        loop:true,
        margin:30,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        autoWidth: true,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:9
            },
            1000:{
                items:16
            }
        }
    }

    return(
        <OwlCarousel className="owl-theme" {...carouselOptions} id="header-owl-carousel">
            {carBrandList}
        </OwlCarousel>
    )
}

export default HeaderComp;