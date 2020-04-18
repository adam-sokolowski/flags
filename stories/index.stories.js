import { storiesOf } from '@storybook/html';
import { select, withKnobs } from '@storybook/addon-knobs';
import { COUNTRY_CODES } from './countries.const';

const sizes = {
  ExtraSmall: 'xs',
  Small: 's',
  Medium: 'm',
  Large: 'l',
  ExtraLarge: 'xl',
};
const size = select('Size', sizes, 'm');

const getTemplate = (letter) => `
  <div class="padding">
    ${COUNTRY_CODES
    .filter(country => country.name.startsWith(letter))
    .map(country => `
        <div class="wrapper">
          <div class="container flag flag-${size} flag-${country.code.toLowerCase()}"></div>
            <div class="label">[${country.code}] - ${country.name}</div>
        </div>`
    )
    .toString()
    .replace(/,/g, '')
  }
</div>`;

storiesOf('Countries', module)
  .add('A', () => getTemplate('A'))
  .add('B', () => getTemplate('B'))
  .add('C', () => getTemplate('C'))
  .add('D', () => getTemplate('D'))
  .add('E', () => getTemplate('E'))
  .add('F', () => getTemplate('F'))
  .add('G', () => getTemplate('G'))
  .add('H', () => getTemplate('H'))
  .add('I', () => getTemplate('I'))
  .add('J', () => getTemplate('J'))
  .add('K', () => getTemplate('K'))
  .add('L', () => getTemplate('L'))
  .add('M', () => getTemplate('M'))
  .add('N', () => getTemplate('N'))
  .add('O', () => getTemplate('O'))
  .add('P', () => getTemplate('P'))
  .add('Q', () => getTemplate('Q'))
  .add('R', () => getTemplate('R'))
  .add('S', () => getTemplate('S'))
  .add('T', () => getTemplate('T'))
  .add('U', () => getTemplate('U'))
  .add('V', () => getTemplate('V'))
  .add('Y', () => getTemplate('Y'))
  .add('Z', () => getTemplate('Z'));

export default {
  title: 'Knobs',
  decorators: [withKnobs],
};