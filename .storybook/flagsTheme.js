import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Arial", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'silver',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: 'black',

  // Form colors
  inputBg: 'white',
  inputBorder: 'black',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Countries flags',
});