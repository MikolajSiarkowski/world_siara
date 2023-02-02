export default async function fetchData(query: string){
  return fetch(`https://restcountries.com/v3.1/alpha/${query}`);
}