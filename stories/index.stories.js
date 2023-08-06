import { storiesOf } from '@storybook/html';
import { COUNTRY_CODES, DEPENDENT_TERRITORIES } from './countries.const';
import { select, withKnobs } from '@storybook/addon-knobs';

const sizes = {
  ExtraSmall: 'xs',
  Small: 's',
  Medium: 'm',
  Large: 'l',
  ExtraLarge: 'xl',
};

const size = select('Size', sizes, 'l');

const getTemplate = (list) => `
  <div class="padding">
    ${list
    .map(country => `
        <div class="wrapper">
          <div class="container">
            <span class="flag flag-${country.code.toLowerCase()} flag-${size}"/>
          </div>
          <div class="label">
            <div class="code">
              ${country.code}
            </div>
            ${country.name}
          </div>
        </div>`
    )
    .toString()
    .replace(/,/g, '')
  }
</div>`;

storiesOf('Countries', module).add('List', () => getTemplate(COUNTRY_CODES));
storiesOf('Territories', module).add('List', () => getTemplate(DEPENDENT_TERRITORIES));

export default {
  title: 'Adjust flag size',
  decorators: [withKnobs],
};