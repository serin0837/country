import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home";
import CountryList from "./component/CountryList";
import Footer from "./component/Footer";
import logo from "./logo.png";
import ImaginaryCountryList from "./component/ImaginaryCountryList";

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/country" className="nav-link">
              Country
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/imaginarycountries" className="nav-link">
              Imaginary Country
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/country" component={CountryList} />
        <Route path="/imaginarycountries" component={ImaginaryCountryList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
