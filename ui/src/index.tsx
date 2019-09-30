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

 import makeStore from './store';

/**
 * Components
 */

import { App } from './App';

const root = document.getElementById('app');
const store = makeStore();

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    root
);