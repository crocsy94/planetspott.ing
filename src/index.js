import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import Router from './router/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ThemeProvider theme={theme}><Router/></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
