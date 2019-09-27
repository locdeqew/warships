/**
 * Vendor
 */
import * as React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Store
 */

import store from './store/store';

/**
 * Components
 */

import { AppRouter } from './appRouter';

const root = document.getElementById('app');

console.log('r', root);

render(
    <Provider store={store}>
        <Router>
            <AppRouter/>
        </Router>
    </Provider>,
    root
);