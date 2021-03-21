import React from 'react';
import {NavbarComp, HeaderComp, FooterComp, ProductListComp, NotFoundComp} from './components/index';
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
          <Route exact path="/">   
            <HeaderComp />
          </Route>
          <Route exact path="/store">   
            <ProductListComp />
          </Route>
          <Route path="*">   
            <NotFoundComp />
          </Route>
          </Switch>
          <FooterComp />  
        </div>
      </GlobalProvider>
  );
}

export default App;
