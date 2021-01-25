import React, { Component } from "react";
import axios from "axios";

class EditImaginaryCountry extends Component {
    state = {
        name: "",
        capital: "",
        region: "",
        population: "",
        flag: "",

    };

    componentDidMount() {
        axios
            .get("https://country-back.herokuapp.com/api/imaginarycountries/"+this.props.match.params.id)
            .then(response => {
                this.setState({
                name: response.data.name,
                capital: response.data.capital,
                region: response.data.region,
                population: response.data.population,
                flag: response.data.flag
                })
            })
            .catch(function(error){
            console.log(error)
            })
        }

    handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
    event.preventDefault();
    //add country to database
    const imaginaryCountry = {
        name: this.state.name,
        capital: this.state.capital,
        region: this.state.region,
        population: this.state.population,
        flag: this.state.flag
    }
    console.log(imaginaryCountry)
    axios.patch("https://country-back.herokuapp.com/api/imaginarycountries/"+this.props.match.params.id, imaginaryCountry)
    .then((res) => {
        console.log(res.data)
        window.location = "/imaginarycountries"
        })
    }
        
  render() {
    return (
      <form className = "imaginary-country-form container" onSubmit = {this.handleSubmit}>
        <p>Edit an imaginary country</p>
        <div className = "form-group">
        <label>
          Name:
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "name"
            value = {this.state.name}
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
            value = {this.state.capital}
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
            value = {this.state.region}
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
            value = {this.state.population}
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
            value = {this.state.flag}
            required
          ></input>
        </label>
        </div>
        <div className = "form-group">
          <button  className="btn btn-primary" type="submit">Update your Imaginary Country!</button>
        </div>
      </form>
    );
  }
}

export default EditImaginaryCountry;
