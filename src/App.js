import React from 'react';
// import logo from './logo.svg';
import HomeComponent from './HomeComponent';
import CovidApi from './CovidApi';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/covid-india-api">API</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/covid-india-api">
            <CovidApi />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
