import React from 'react';

import './NotFound.css';

import {Link} from 'react-router-dom'
import {Button} from 'reactstrap';

const NotFoundComp = () => {
    return(
        <div id="not-found-container" className="d-flex flex-column align-items-center text-center justify-content-center">
                <h2>404-Not found.</h2>
                <Button tag={Link} to="/">Vuelve al Inicio</Button>
                <Button  tag={Link} to="/store">Vuelve a la Tienda</Button>

                <span id="car-one"><i className="fas fa-car-side" /></span>
                <span id="car-two"><i className="fas fa-truck-pickup"></i></span>
        </div>
    )
}

export default NotFoundComp;