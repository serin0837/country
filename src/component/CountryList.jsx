import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class CountryList extends Component {
  state = {
    countries: [],
    isLoading: true,
    selectedRegion: "Europe",
  };

  componentDidMount() {
    axios
      .get(`https://country-back.herokuapp.com/api/countries`)
      .then(({ data }) => {
        this.setState({ countries: data, isLoading: false });
      });
  }

  handleSelect = (event) => {
    this.setState({ selectedRegion: event });
  };

  render() {
    const { isLoading, countries } = this.state;
    if (isLoading) return <Loader/>;
    return (
      <div>
        <DropdownButton
          alignRight
          title = "Country by Region"
          id = "dropdown-menu-align-right"
          onSelect = {this.handleSelect}
        >
          <Dropdown.Item eventKey="Africa"> Africa </Dropdown.Item>
          <Dropdown.Item eventKey="Americas"> Americas </Dropdown.Item>
          <Dropdown.Item eventKey="Asia"> Asia </Dropdown.Item>
          <Dropdown.Item eventKey="Europe"> Europe </Dropdown.Item>
          <Dropdown.Item eventKey="Oceania"> Oceania </Dropdown.Item>
        </DropdownButton>
        <p style={{"textAlign":"right", "marginRight": "5rem"}}> ({this.state.selectedRegion}) </p>
        <main className="country">
          {countries
            .filter((country) => country.region === this.state.selectedRegion)
            .map((country) => {
              return (
                <ul key = {country._id}>
                  <li className = "countryTitle">{country.name}</li>
                  <li>
                    <img src = {country.flag} alt = {country.name}></img>
                  </li>
                  <div className = "countryContent"> 
                    <li>
                      <strong>Capital:</strong> {country.capital}
                    </li>
                    <li>
                      <strong>Region:</strong> {country.region}
                    </li>
                    <li>
                      <strong>Population:</strong> {country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </li>
                  </div>
                </ul>
              );
            })}
        </main>
      </div>
    );
  }
}

export default CountryList;
