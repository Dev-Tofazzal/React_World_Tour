import { useState } from "react";
import "./Country.css"
const Country = ({country, handleVisitedCountry}) => {
   const {name,flags,area,population,cca3} = country;
   const [ visited,setVisited ] = useState(false);
   
   const handleVisited = () => {
    setVisited(!visited)
   }

   
    return (
        <div  className={`country ${visited ? "visited" : "non_visited"}`}>
           <h3 style={{color: visited && "red"}}>Name: {name.common}</h3>
           <img style={{width:"300px", height:"200px"}} src={flags.png} alt="" />
           <h4>Area: {area}</h4>
           <p>Population: {population}</p>
           <p><small>Code: {cca3 }</small></p>
           <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
           <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
           <br />
           {
            visited ? "I have visited this country" : "I want to go "
           }
        </div>
    );
};

export default Country;