import debounce from 'lodash.debounce';
import { notificationOptions } from './notification.js';
import fetchCountries from './fetch-countries';
import allCountries from '../templates/all-countries.hbs';
import specificCountry from '../templates/specific-country.hbs';

const country_list = document.querySelector('.country_list');
const input_country = document.querySelector('.input_country');

input_country.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(e) {
  fetchCountries(e.target.value)
    .then(data => {
      if ((data.length > 1) & (data.length <= 10)) {
        const allItems = data.map(item => allCountries(item)).join('');
        country_list.innerHTML = allItems;
      }
      if (data.length === 1) {
        const result = data.map(item => specificCountry(item)).join('');
        country_list.innerHTML = result;
      }
      if (data.length > 10) {
        country_list.innerHTML = '';
        notificationOptions();
      }
    })
    .catch(err => console.warn(err));
}
