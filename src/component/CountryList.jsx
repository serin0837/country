import React, { Component } from "react";
import axios from "axios";

class CountryList extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get(`https://country-back.herokuapp.com/api/countries`)
      .then(({ data }) => {
        this.setState({ countries: data });
      });
  }

  render() {
    return (
      <main className="country">
        {this.state.countries.map((country) => {
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
    );
  }
}

export default CountryList;
