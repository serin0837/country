import React, { Component } from 'react';
import axios from "axios"
import CreateImaginaryCountry from "./CreateImaginaryCountry"
import Loader from "./Loader"
import ImaginaryCountryCard from "./ImaginaryCountryCard"

class ImaginaryCountryList extends Component {
    state = {
        imaginaryCountries: [],
        isLoading: true,
    };

    componentDidMount(){
        axios
        .get("https://country-back.herokuapp.com/api/imaginarycountries")
        .then(({data})=>{
            this.setState({imaginaryCountries: data, isLoading: false});
        })
    }

    removeCountry = (id) => {
      axios.delete("https://country-back.herokuapp.com/api/imaginarycountries/"+id)
      .then(res=>{console.log(res.data)})//delete working
      this.setState({
        imaginaryCountries: this.state.imaginaryCountries.filter(imaginaryCountry => imaginaryCountry._id !== id)//after bind it's working
      })
    }

    render() {
      if (this.state.isLoading) return <Loader/>
        return (
          <div>
            <CreateImaginaryCountry/>
            <main className = "imaginaryCountry">
            {this.state.imaginaryCountries
              .map((country) => {
                return (
                  <ImaginaryCountryCard country = {country} key = {country._id} removeCountry = {this.removeCountry}/>
                );
              })}
            </main>
          </div>
        )
    }
}

export default ImaginaryCountryList;