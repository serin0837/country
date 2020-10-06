import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

class CountryList extends Component {
  state = {
    countries: [],
    isLoading: true,
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
    return (
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
    );
  }
}

export default CountryList;
