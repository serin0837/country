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
        console.log(data);
        this.setState({ countries: data });
      });
  }

  render() {
    return (
      <main className="country">
        {this.state.countries.map((country) => {
          return (
            <ul>
              <li>{country.name}</li>
              <li>
                <img src={country.flag}></img>
              </li>
            </ul>
          );
        })}
      </main>
    );
  }
}

export default CountryList;
