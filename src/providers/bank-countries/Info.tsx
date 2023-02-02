import React from "react";
import { CountryContext } from "../../CountryContext";
import { useCountry } from "../../countryHook";

export function Info() {
    const {countryHook} = useCountry();

    const {country} = React.useContext(CountryContext);

    if (!country) {
        return <></>;
    }

    const {name, capitalCity, region, incomeLevel, latitude, longitude} = country;

     return (
         <div className="info">
            Hook: {countryHook?.name}
             <div className="general">
                <ul>
                    <li>Name: {name}</li>
                    <li>Capital: {capitalCity}</li>
                    <li>Region: {region.value}</li>
                    <li>Income Level: {incomeLevel.value}</li>
                    <li>Latitude and Longtitude: {latitude}, {longitude}</li>
                </ul>
             </div>
         </div>
     )
}