import { COUNTRY_CODES } from './countries.const';

export default {
  title: 'CSS Flags collection',
};

export const Flags = () => `<div class="padding">${COUNTRY_CODES.map(country => `<div class="wrapper">
      <div class="margin flag flag-${country.code.toLowerCase()}"></div>
      <p>${country.name}</p>
    </div>
    `
).toString().replace(/,/g, '')}</div>`;

