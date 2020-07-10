import React, { Fragment } from 'react';
import './App.css';

//logo brand
import logo from './img/Logo-01.png'

// Bootstrap
import { Navbar, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, HowToUse, MyProfile, OurFeature } from './Menu'



//------------ Main --------------------------------------------//



function App() {
  return (
    <Fragment>

       {/*  Navbar bootstrap */}

      <Navbar sticky="top" style={{backgroundColor: "#E1E1E1"}}>
        <Navbar.Brand href="Home">
          <img
            alt="Brand"
            src={logo}
            width="150px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar>

      {/* List sidebar dengan router */}

      <Router>
        <div className="sidenav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/HowToUse">How to use</Link></li>
            <li><Link to="/OurFeature">Our feature</Link></li>
            <li><Link to="/MyProfile">My profile</Link></li>
          </ul>
        </div>

        {/* href="/#" to remove warning karena tag a (tag a untuk link styling)*/}
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/HowToUse">
            <HowToUse/>
          </Route>
          <Route path="/OurFeature">
            <OurFeature/>
          </Route>
          <Route path="/MyProfile">
            <MyProfile/>
          </Route>
        </Switch>
      </Router>

      <Modal.Footer>
        <p style={{top:"95%",left:"82%",position: "fixed", color:"#909090"}}>Copyright by Khairul Imam</p>
      </Modal.Footer>
    </Fragment>
  );
}

export default App;