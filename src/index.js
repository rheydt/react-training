// external
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
// internal
import App from './App';
import * as serviceWorker from './serviceWorker';
// styles
import '@athena/forge/static/css/forge.css';
import './index.css';

/*
  3 props injected by react router:
  - match: info on the matched URL
  - location: info on the current URL
  - history: programatically change URL
*/

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
