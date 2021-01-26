import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home";
import CountryList from "./component/CountryList";
import Footer from "./component/Footer";
import logo from "./logo.png";
import ImaginaryCountryList from "./component/ImaginaryCountryList";
import EditImaginaryCountry from "./component/EditImaginaryCountry";
import CreateImaginaryCountry from "./component/CreateImaginaryCountry";

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
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
              Country Information
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/createimaginarycountry" className="nav-link">
              Create Imaginary Country 
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
        <Route path="/" exact component={Home} />
        <Route path="/country" exact component={CountryList} />
        <Route path="/imaginarycountries" exact component={ImaginaryCountryList} />
        <Route path ="/createimaginarycountry" exact component = {CreateImaginaryCountry}/>
        <Route path ="/imaginarycountries/:id" exact component = {EditImaginaryCountry}/>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
