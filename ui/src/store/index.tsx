/**
 * Vendors
 */

import { createStore } from "redux";

/**
 * Reducers
 */

import { rootReducer } from './reducers';

export default function makeStore () {
    return createStore(rootReducer);
};