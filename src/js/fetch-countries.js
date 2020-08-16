import { markupCountries, result } from './markup-countries.js';
import refs from './refs';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error(`${res.status} error while your search has occured`);
    })
    .then(countries => {
      markupCountries(countries);
    })
    .catch(err => {
      refs.countriesBlock.innerHTML = '';
      result.name = '';
      return console.error(err);
    });
}

export default fetchCountries;
