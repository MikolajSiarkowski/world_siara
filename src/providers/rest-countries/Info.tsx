import { Country } from "./model";

interface InfoProps {
    country: Country;
}

export function Info({country}: InfoProps) {
    const { name, capital, population, area, latlng, flags} = country;

     return (
         <div className="info">
             <div className="general">
                <ul>
                    <li>Name: {name.common}</li>
                    <li>Capitol: {capital}</li>
                    <li>Population: {population}</li>
                    <li>Area: {area}</li>
                    <li>Latitude and Longtitude: {latlng.join(', ')}</li>
                </ul>
             </div>
             <div className="flag">
                <img className="flag" alt="flag" src={flags.png}></img>
             </div>
         </div>
     )
}