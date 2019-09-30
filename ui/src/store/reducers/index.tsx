/**
 * Vendor
 */

import { combineReducers } from 'redux';

/**
 * Reducers
 */

import { authReducer } from './auth';

const rootReducer  = combineReducers({
    auth: authReducer
})

export { rootReducer };

export type AppState = ReturnType<typeof rootReducer>;