import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class EditImaginaryCountry extends Component {
    state = {
        name: "",
        capital: "",
        region: "",
        population: "",
        flag: "",
        redirect: false
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
    axios.patch("https://country-back.herokuapp.com/api/imaginarycountries/"+this.props.match.params.id, imaginaryCountry)
    .then((res) => 
          this.setState({redirect: true})
        )
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/imaginarycountries' />
      }
    }
        
  render() {
    return (
      <form className = "imaginary-country-form container" onSubmit = {this.handleSubmit}>
        <h3 style={{margin: "2rem"}}>Edit an imaginary country</h3>
        <div className = "form-group">
        <label>Name: </label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "name"
            value = {this.state.name}
            required
          ></input>
        </div>
        <div className = "form-group">
        <label> Capital:</label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "capital"
            value = {this.state.capital}
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
            value = {this.state.region}
            required
          ></input>
        </div>
        <div className = "form-group">
        <label>Population(number):</label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            value = {this.state.population}
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
            value = {this.state.flag}
            required
          ></input>
        </div>
        <div className = "form-group">
          <button  className="btn btn-primary" type="submit">Update</button>
          {this.renderRedirect()}
        </div>
      </form>
    );
  }
}

export default EditImaginaryCountry;
