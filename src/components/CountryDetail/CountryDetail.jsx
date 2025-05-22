import React from 'react';
import CountryData from '../CountryData/CountryData';

const CountryDetail = ({country, handleVisitedCountry,handleVisitedFlag}) => {
    return (
        <div>
            <h3>Country Detail</h3>
            <hr />
            <CountryData
            country = {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlag = {handleVisitedFlag}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;