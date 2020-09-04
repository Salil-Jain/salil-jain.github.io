import React from 'react';
// import logo from './logo.svg';
import HomeComponent from './HomeComponent';
import ProjectsComponent from './ProjectsComponent';
// import CovidApi from './CovidApi';
import NoMatchPage from './NoMatchPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">Salil Jain</Navbar.Brand>
        <Nav className="ml-auto ">
          <Nav.Link href="/#/projects">Projects</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/projects" component={ProjectsComponent} />
        {/* <Route path="/covid-india-api" component={CovidApi} /> */}
        <Route component={NoMatchPage} />
      </Switch>
      <div className="footer-div">
        <a href="https://twitter.com/salil__jain/" rel="noopener noreferrer" target="_blank"><FaTwitterSquare /></a>
        <a href="https://www.linkedin.com/in/saliljain1/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Salil-Jain" rel="noopener noreferrer" target="_blank"><FaGithubSquare /></a>
        <a href="mailto:j.salil36@gmail.com" rel="noopener noreferrer" target="_blank"><MdEmail /></a>
      </div>
    </Router>
  );
}

export default App;
