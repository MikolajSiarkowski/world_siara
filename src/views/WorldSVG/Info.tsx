export function Info({data}: any) {
     return (
         <div className="info">
             <div className="general">
                <ul>
                    <li>Name: {data.name.common}</li>
                    <li>Capitol: {data.capital}</li>
                    <li>Population: {data.population}</li>
                    <li>Area: {data.area}</li>
                    <li>Latitude and Longtitude: {data.latlng.join(', ')}</li>
                </ul>
             </div>
             <div className="flag">
                <img className="flag" alt="flag" src={data.flags.png}></img>
             </div>
         </div>
     )
}