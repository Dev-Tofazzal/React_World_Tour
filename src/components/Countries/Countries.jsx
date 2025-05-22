import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"


const Countries = () => {
    const [countries,setCountries] = useState([])

    const [visitedCountries,setVisitedCountries] = useState([])

    const [visitedFlags,setVisitedFlags] = useState([])
    

    const handleVisitedCountry = country => {
        console.log("add this to your visited country");
        
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)   
    }

    const handleVisitedFlag = flag => {
        console.log("flag adding");
        const newVisitedFlag = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlag)
        
    }


    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            {/* visited countries */}
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag_container">
                    {
                        visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
                    }
            </div>

            {/* display countries */}
            <div className="contries_container">
                {
                    countries.map(country => <Country 
                    key={country.cca3} 
                    country = {country} 
                    handleVisitedCountry= {handleVisitedCountry}
                    handleVisitedFlag = {handleVisitedFlag}
                   ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;