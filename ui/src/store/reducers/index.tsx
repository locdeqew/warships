/**
 * Vendor
 */

import { combineReducers } from 'redux';

/**
 * Reducers
 */

import { authReducer } from './auth';

export function rootReducer() {
    combineReducers({
        auth: authReducer
    })
};


export type AppState = ReturnType<typeof rootReducer>