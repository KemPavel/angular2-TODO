import { ActionReducer, Action } from '@ngrx/store';

const UPDATE_TODOS = 'UPDATE_TODOS';

export const todoListReducer: ActionReducer<any> = (state: any = [], action: any) => {
  switch (action.type) {
    case UPDATE_TODOS:
      return action.payload;
    default: 
      return state;
  }
}