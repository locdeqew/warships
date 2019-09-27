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

import { Store } from "redux";

/**
 * Components
 */

import { AppRouter } from './appRouter';

const root = document.getElementById('root');
let store: Store;

render(
    <Provider store={store}>
        <Router>
            <AppRouter/>
        </Router>
    </Provider>,
    root
);