import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import { AddEmployee } from "/components/AddEmployee.js";
import { ListEmployee } from "/components/ListEmployee";
import { UpdateEmployee } from "/components/UpdateEmployee";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/" className="navbar-brand">
          SSYS Employee Manager
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link exact to={"/add/"} className="nav-link">
              Add
            </Link>
            <Switch>
              <Route exact path="/" component={ListEmployee} />
              <Route exact path="/add/" component={AddEmployee} />
              <Route path="/employee/:id/update/" component={UpdateEmployee} />
            </Switch>
          </li>
        </div>
      </nav>
      <div className="container m-10">
        // Add the routes
      </div>
    </div>
  );
}
export default App;