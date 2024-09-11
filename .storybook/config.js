import { addDecorator, addParameters, configure } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

// Import styles
import "./../src/flags/countries/_index.scss";
import "./../stories/index.scss";

addDecorator(withKnobs);

addParameters({
  showPanel: false,
  panelPosition: 'top',
});

const req = require.context('./../stories', true, /.stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
