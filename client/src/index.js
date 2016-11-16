import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

import stylesheet from '../dist/styles.scss';

render(<App />, document.getElementById('app'));