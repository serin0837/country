import React, { Component } from "react";
import axios from "axios";

//countryadder
class ImaginaryCountry extends Component {
  state = {
    name: "",
    capital: "",
    region: "",
    populations: "",
    flag: "",
  };
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    //add country to database
    axios
      .post("https://country-back.herokuapp.com/api/countries", {
        ...this.state,
      })
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    return (
      <form className="imaginarycountry" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={this.handleInput}
            name="name"
            required
          ></input>
        </label>
        <br />
        <label>
          Capital:
          <input
            type="text"
            onChange={this.handleInput}
            name="capital"
            required
          ></input>
        </label>
        <br />
        <label>
          region
          <input
            type="text"
            onChange={this.handleInput}
            name="region"
            required
          ></input>
        </label>
        <br />
        <label>
          Population:
          <input
            type="text"
            onChange={this.handleInput}
            name="population"
            required
          ></input>
        </label>
        <label>
          Image:
          <input
            type="text"
            onChange={this.handleInput}
            name="flag"
            required
          ></input>
        </label>
        <br />
        <button type="submit">Add Country!</button>
      </form>
    );
  }
}

export default ImaginaryCountry;
