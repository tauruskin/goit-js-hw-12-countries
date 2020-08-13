import debounce from 'lodash.debounce';
import refs from './refs.js';
import fetchCountries from './fetch-countries.js';

refs.search.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(refs.search.value);
  }, 500),
);
