import React from 'react';
import './Footer.css';


const FooterComp = () => {
    return(
        <footer id="footer-container">
            <div class="container">
                <div class="row py-2 justify-content-around align-items-center">
                    <div class="col-6 col-md-3 footer-col">
                        <h3>CAR STORE</h3>
                        <ul>
                            <li><a href="/">Tienda Online</a></li>
                            <li><a href="/">Sobre Nosotros</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-3 footer-col text-center">
                        <h3>SOCIAL</h3>
                        <ul className="text-center">
                            <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="/"><i className="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                    <div class="d-none d-md-block col-md-3 footer-col text-center">
                        <p>Car store &#169;. Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComp;