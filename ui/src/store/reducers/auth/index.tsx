/**
 * Interfaces
 */

import { AuthState, AuthActionTypes } from '../../types';

const initialState: AuthState = {
    logged: false
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case 'TOOGLE_AUTH':
            return { ...state, logged: action.payload };
        default:
            return state;
    }
}

export { authReducer };