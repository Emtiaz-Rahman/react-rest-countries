import React, { useEffect, useState } from 'react';

const Loadcountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    return (
        <div>
            <h2>Visiting New County in the World</h2>
            <p>Available Country:{countries.length}</p>{
                countries.map(country => <Country name={country.name.common}></Country>)
            }

        </div>
    );
};

function Country(props) {
    console.log(props)
    return (
        <div>
            <h3>Name:{props.name}</h3>
        </div>
    )
}


export default Loadcountries;