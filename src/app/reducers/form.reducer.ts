import { ActionReducer, Action } from '@ngrx/store';

const GET_AUTHORS = 'GET_AUTHORS';

export const formReducer: ActionReducer<any> = (state: any = [], action: any) => {
  switch (action.type) {
    case GET_AUTHORS:
      return action.payload;
    default: 
      return state;
  }
}