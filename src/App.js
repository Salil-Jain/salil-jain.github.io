import React from 'react';
// import logo from './logo.svg';
import HomeComponent from './HomeComponent';
import ProjectsComponent from './ProjectsComponent';
import CovidApi from './CovidApi';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">Salil Jain</Navbar.Brand>
        <Nav className="ml-auto ">
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/projects">
          <ProjectsComponent />
        </Route>
        <Route path="/covid-india-api">
          <CovidApi />
        </Route>
        <Route path="/">
          <HomeComponent />
        </Route>
      </Switch>
      <div className="footer-div">
        Footer Content
      </div>
    </Router>
  );
}

export default App;
