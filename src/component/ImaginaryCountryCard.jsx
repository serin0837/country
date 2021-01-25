import React from 'react';
import {Link} from "react-router-dom";

const ImaginaryCountryCard = ({country, removeCountry}) => {
    const handleClick = (clickEvent) => {
        removeCountry(country._id)
    }

    return (
        <div>
            <ul key = {country._id}>
                <li className = "countryTitle">{country.name}</li>
                <li>
                    <img src = {country.flag} alt={country.name}></img>
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
                <i onClick = {handleClick} id = {country._id} className="fa fa-trash-o"></i>
                <Link to={`/imaginarycountries/${country._id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
            </ul>            
        </div>
    );
};

export default ImaginaryCountryCard;
