import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'


const FooterComp = () => {
    return(
        <footer id="footer-container">
            <div className="container">
                <div className="row py-2 justify-content-around align-items-center">
                    <div className="col-6 col-md-3 footer-col">
                        <h3>CAR STORE</h3>
                        <ul>
                            <li><Link to="/store">Tienda Online</Link></li>
                            <li><Link to="/">Sobre Nosotros</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3 footer-col text-center">
                        <h3>SOCIAL</h3>
                        <ul className="text-center">
                            <li><a href="https://www.linkedin.com/in/sebastian-montagna/"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/sebamont"><i className="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                    <div className="d-none d-md-block col-md-3 footer-col text-center">
                        <p>Car store &#169;. Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComp;