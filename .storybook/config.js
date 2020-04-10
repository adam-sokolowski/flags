import { configure } from '@storybook/html';

const req = require.context('./../stories', true, /.stories\.js$/);

import "./../src/flags/_index.scss";
import "./../stories/index.scss";

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
