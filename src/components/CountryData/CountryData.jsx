import React from 'react';

const CountryData = (props) => {
    const {country} = props
    
    return (
        <div>
            <h4>{country.name.official} {}</h4>
            <h4>{country.region}</h4>
        </div>
    );
};

export default CountryData;