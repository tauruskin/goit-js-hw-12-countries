import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

import countriesListTemplate from '../templates/countries-list.hbs';
import specificCountryTemplate from '../templates/specific-country.hbs';
import refs from './refs';

const notificationOptions = {
  title: 'Too many matches found',
  text: 'Please, do a more specific search',
  width: '400px',
  minHeight: 'auto',
  icon: true,
  closer: false,
  sticker: false,
  remove: true,
  delay: 500,
};

// function errorMsg() {
//   error({
//     title: 'Oh No!',
//     text: 'Something terrible happened.',
//   });
// }

const result = {
  name: '',
};

function markupCountries(countries) {
  if (result.name === countries[0].name && countries.lenght === 1) {
    return;
  } else {
    if (countries.lenght > 10) {
      result.name = '';
      refs.countriesBlock.innerHTML = '';
      error(notificationOptions);
    }
    if (countries.length >= 2 && countries.lenght <= 10) {
      result.name = '';
      const countriesListMarkup = countriesListTemplate(countries);
      refs.countriesBlock.innerHTML = countriesListMarkup;
    }
    if (countries.length === 1) {
      result.name = countries[0].name;
      const specificCountryMarkup = specificCountryTemplate(countries);
      refs.countriesBlock.innerHTML = specificCountryMarkup;
    }
  }
}
export { markupCountries, result };
