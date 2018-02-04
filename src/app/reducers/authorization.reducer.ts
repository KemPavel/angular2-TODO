import { ActionReducer, Action } from '@ngrx/store';

const LOGIN_ACTION = 'LOGIN_ACTION';
const LOGOUT_ACTION = 'LOGOUT_ACTION';

export const authReducer: ActionReducer<any> = (state: any = !!localStorage.getItem('userInfo'), action: any) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return true;
    case LOGOUT_ACTION:
      return false;
    default: 
      return state;
  }
}