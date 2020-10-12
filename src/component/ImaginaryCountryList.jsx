import React, { Component } from 'react';
import axios from "axios"
import CreateImaginaryCountry from "./CreateImaginaryCountry"
import Loader from "./Loader"

class ImaginaryCountryList extends Component {
    state={
        imaginarycountries:[],
        isLoading:true,
    };

    componentDidMount(){
        axios
        .get("https://country-back.herokuapp.com/api/imaginarycountries")
        .then(({data})=>{
            console.log(data)
            this.setState({imaginarycountries:data,isLoading:false});
        })
        .catch(error=>console.log(error))
        
    }

    render() {
      if (this.state.isLoading) return <Loader/>
        return (
           <div>
                <CreateImaginaryCountry/>
            <main className="imaginaryCountry">
                
            {this.state.imaginarycountries
              .map((country) => {
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
          </div>
        )
    }
}

export default ImaginaryCountryList;