import React, { Component } from "react";
import axios from "axios";

class CreateImaginaryCountry extends Component {
  state = {
    name: "",
    capital: "",
    region: "",
    population: "",
    flag: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //add country to database
    const imaginaryCountry ={
      name: this.state.name,
      capital: this.state.capital,
      region: this.state.region,
      population: this.state.population,
      flag: this.state.flag
    }
    axios
      .post("https://country-back.herokuapp.com/api/imaginarycountries", 
        imaginaryCountry,
      )
      .then((response) => {
        window.location = "./imaginarycountries"
      });
  };

  render() {
    return (
      <form className = "imaginary-country-form container" onSubmit = {this.handleSubmit}>
        <div className = "form-group">
        <label>
          Name:
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "name"
            required
          ></input>
        </label>
        </div>
        <div className = "form-group">
        <label>
          Capital:
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "capital"
            required
          ></input>
        </label>
        </div>
        <div className = "form-group">
        <label>
          Region:
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "region"
            required
          ></input>
        </label>
        </div>
        <div className = "form-group">
        <label>
          Population(number):
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "population"
            required
          ></input>
        </label>
        </div>
        <div className = "form-group">
        <label>
          Image(URL please!):
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "flag"
            required
          ></input>
        </label>
        </div>
        <div className = "form-group">
          <button  className="btn btn-primary" type="submit">Add your Imaginary Country!</button>
        </div>
      </form>
    );
  }
}

export default CreateImaginaryCountry;
