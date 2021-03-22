import React, {useContext, useState} from 'react';
import {GlobalContext} from '../../../contexts/GlobalState';
import {Button} from 'reactstrap';

import './ContactForm.css';

const ContactForm = ({vehicleById}) =>{
    const {postMsg, postContactInfo} = useContext(GlobalContext)

    const [contactInfo, setContactInfo] = useState({
        fullname: "",
        email: "",
        phone: "",
        product: vehicleById.id
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setContactInfo({
            ...contactInfo,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postContactInfo(contactInfo)
    }


    if(postMsg){
        return(
            <h6>
                {postMsg}
            </h6>
        )
    }

    return(
        <>
            <h4>Solicitá una cotización sobre este Nissan {vehicleById.model}</h4>
            <hr />
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-12 col-md-6 col-lg-4">
                    <label htmlFor="fullname">Nombre completo:</label>
                    <input type="text" placeholder="Homer J. Simpson" className="form-control" onChange={handleInputChange} name="fullname" id="fullname" required/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" placeholder="homersimpson@hotmail.com" className="form-control" onChange={handleInputChange} name="email" id="email" required/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <label htmlFor="phone">Celular:</label>
                    <input type="tel" placeholder="179287391" className="form-control" onChange={handleInputChange} name="phone" id="phone" required />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-4">
                    <Button type="submit" className="btn">Enviar</Button>
                </div>
            </form>
        </>
    )
}

export default ContactForm;