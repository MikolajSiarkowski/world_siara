export default async function fetchData(query: string){
  return fetch(`http://api.worldbank.org/v2/country/${query}?format=json`);
}