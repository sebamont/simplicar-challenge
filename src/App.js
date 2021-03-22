import React from 'react';
import {NavbarComp, HeaderComp, FooterComp, ProductListComp, NotFoundComp, ProductDetailComp} from './components/index';
import {GlobalProvider} from './contexts/GlobalState';

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";  

import './App.css';

function App() {
  const location = useLocation();
  return (
      <GlobalProvider>
        <div className="App">
          <NavbarComp />
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HeaderComp} />   
            <Route exact path="/store" component={ProductListComp} />   
            <Route exact path="/car/:id" component={ProductDetailComp} />
            <Route path="*" component={NotFoundComp} />   
          </Switch>
          <FooterComp />  
        </div>
      </GlobalProvider>
  );
}

export default App;
