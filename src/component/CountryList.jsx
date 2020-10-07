import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class CountryList extends Component {
  state = {
    countries: [],
    isLoading: true,
    value: "",
  };

  componentDidMount() {
    axios
      .get(`https://country-back.herokuapp.com/api/countries`)
      .then(({ data }) => {
        this.setState({ countries: data, isLoading: false });
      });
  }

  render() {
    const { isLoading, countries } = this.state;
    if (isLoading) return <Loader />;
    const handleSelect = (event) => {
      console.log(event);
    };
    return (
      <div>
        <DropdownButton
          alignRight
          title="Country by Region"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="Africa" href="/region/Africa">
            Africa
          </Dropdown.Item>
          <Dropdown.Item eventKey="Americas" href="/region/America">
            Americas
          </Dropdown.Item>
          <Dropdown.Item eventKey="Asia" href="/region/Asia">
            Asia
          </Dropdown.Item>
          <Dropdown.Item eventKey="Europe" href="/region/Europe">
            Europe
          </Dropdown.Item>
          <Dropdown.Item eventKey="Oceania" href="/region/Oceania">
            Oceania
          </Dropdown.Item>
        </DropdownButton>
        <Route path="/region/:value" />
        <main className="country">
          {countries.map((country) => {
            return (
              <ul key={country._id}>
                <li className="countryTitle">{country.name}</li>
                <li>
                  <img src={country.flag} alt={country.name}></img>
                </li>
                <li>
                  <strong>Capital:</strong> {country.capital}
                </li>
                <li>
                  <strong>Region:</strong> {country.region}
                </li>
                <li>
                  <strong>Population:</strong> {country.population}
                </li>
              </ul>
            );
          })}
        </main>
      </div>
    );
  }
}

export default CountryList;
