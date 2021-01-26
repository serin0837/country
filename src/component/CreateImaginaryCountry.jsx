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
        window.location = "https://world-traveller.netlify.app/imaginarycountries"
      });
  };

  render() {
    return (
      <form className = "imaginary-country-form container" onSubmit = {this.handleSubmit}>
        <h3 style={{margin: "2rem"}}>Add an imaginary country</h3>
        <div className = "form-group">
        <label>Name:</label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "name"
            required
          ></input>
        </div>
        <div className = "form-group">
        <label>Capital:  </label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "capital"
            required
          ></input>
        </div>
        <div className = "form-group">
        <label>Region: </label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "region"
            required
          ></input>
        </div>
        <div className = "form-group">
        <label>Population(number):</label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "population"
            required
          ></input>
        </div>
        <div className = "form-group">
        <label>Image(URL please!):</label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "flag"
            required
          ></input>
        </div>
        <div className = "form-group">
          <button  className="btn btn-primary" type="submit">Create</button>
        </div>
      </form>
    );
  }
}

export default CreateImaginaryCountry;
