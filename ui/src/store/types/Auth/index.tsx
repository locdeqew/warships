export const TOOGLE_AUTH = 'TOOGLE_AUTH'

export interface AuthState {
    logged: boolean
};

interface ToogleAuthAction {
  type: typeof TOOGLE_AUTH
  payload: boolean
};


export type AuthActionTypes = ToogleAuthAction;