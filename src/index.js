import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

import { ThemeProvider, injectGlobal } from 'styled-components';
import { theme } from './theme';

import Router from './router/router';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  @font-face {
    font-family: 'BebasNeueRegular';
    src: local('BebasNeueRegular'), url(./assets/BebasNeueRegular.woff) format('woff');
  }

  body {
    margin: 0;
  }
`;

ReactDOM.render(<ThemeProvider theme={theme}><Router /></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
