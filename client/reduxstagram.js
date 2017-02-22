import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';

// Sentry
import Raven from 'raven-js';
import { sentry_url } from './config';

// Import css
import css from './styles/style.styl';

// Import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

Raven.config(sentry_url).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

store.dispatch({type: 'FETCH_DATA_REQUESTED'});

render(router, document.getElementById('root'));
