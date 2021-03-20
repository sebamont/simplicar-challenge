import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';
import {Link} from 'react-router-dom';


//styles
import './Navbar.css';
//statics
import nissanBrand from '../../static/images/nissanBrand.jpg';

const NavbarComp = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar dark expand="md" id="navbar" className="sticky-top">
        <NavbarBrand tag={Link} to="/" className="mr-auto navbar-brand"><img src={nissanBrand} alt="Nissan Logo" className="d-inline-block align-top" width="100"
            height="100"/></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar className="ml-0 ml-md-5 ">
            <Nav navbar  >
                <NavItem >
                <NavLink tag={Link} to="/store" className="pt-3 pt-md-0 pl-3 pl-md-0">VEHÍCULOS</NavLink>
                </NavItem >
                <NavItem className="ml-md-5 ">
                <NavLink tag={Link} to="/" className="py-3 py-md-0 pl-3 pl-md-0">SOBRE NOSOTROS</NavLink>
                </NavItem>
            </Nav>
            <Form inline className="ml-lg-auto d-none d-lg-block">
                <FormGroup>
                    <Button><i className="fas fa-search"></i></Button>
                    <Input type="search" placeholder="BUSCAR POR MODELO..."  id="navbar-search-input" className="mr-5"/>
                </FormGroup>
            </Form>
            </Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComp;