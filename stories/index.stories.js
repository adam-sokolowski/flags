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

storiesOf('Countries', module)
  .addDecorator(withKnobs)
  .add('List', () => {
    const size = select('Size', sizes, 'm');
    
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
            </div>`)
          .toString()
          .replace(/,/g, '')
        }
      </div>`;
    
    return getTemplate(COUNTRY_CODES);
  });

export default {
  title: 'Adjust flag size',
  decorators: [withKnobs],
};
