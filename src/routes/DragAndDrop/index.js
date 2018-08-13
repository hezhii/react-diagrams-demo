import React from 'react';

import {BodyWidget} from './components/BodyWidget';
import Application from './Application';

import './index.css';

export default () => {
  const app = new Application();

  return <BodyWidget app={app} />;
};
