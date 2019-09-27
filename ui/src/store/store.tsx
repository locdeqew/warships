/**
 * Vendor
 */

import { createStore } from 'redux';

/**
 * Reducer
 */

import { rootReducer } from './reducers';

const store = createStore(rootReducer);

export default store;