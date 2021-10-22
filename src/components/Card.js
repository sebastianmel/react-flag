import React from 'react';

const Card = (props) => {
    const {country}=props;
console.log(country);

    
    return (
        <li className="card">
            <img src={country.flag} alt="image"/>
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.captal}</li>
                    <li>{country.population}</li>
                </ul>
            </div>

        </li>
    );
};

export default Card;