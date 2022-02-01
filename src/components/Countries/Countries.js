import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div >
            <h1>Travel the World ✈️</h1>
            <hr />
            <h1>Total Countries: {countries.length}</h1>
            <br />
            {/* {
                countries.map(country => console.log(country))
            } */}
            <div className="countries-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.signs}
                            country={country}
                        >
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;