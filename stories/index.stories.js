import { storiesOf } from '@storybook/html';
import { COUNTRY_CODES } from './countries.const';
import { select, withKnobs } from '@storybook/addon-knobs';

const sizes = {
  ExtraSmall: 'xs',
  Small: 's',
  Medium: 'm',
  Large: 'l',
  ExtraLarge: 'xl',
};

const size = select('Size', sizes, 'l');

const getTemplate = () => `
  <div class="padding">
    ${COUNTRY_CODES
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

storiesOf('Countries', module).add('List', () => getTemplate());

export default {
  title: 'Adjust flag size',
  decorators: [withKnobs],
};