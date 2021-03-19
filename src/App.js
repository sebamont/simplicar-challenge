import {NavbarComp, HeaderComp, FooterComp, ProductListComp, NotFoundComp} from './components/index';
import './App.css';

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";  


function App() {
  const location = useLocation();
  return (
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
  );
}

export default App;
