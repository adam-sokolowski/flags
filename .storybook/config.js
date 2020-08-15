import { addParameters, configure } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('./../stories', true, /.stories\.js$/);

addParameters({
  decorators: [ withKnobs ],
  showPanel: true,
  panelPosition: 'top',
});

import "./../src/flags/_index.scss";
import "./../stories/index.scss";

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
