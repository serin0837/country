import React from 'react';

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
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </ul>            
        </div>
    );
};

export default ImaginaryCountryCard;
