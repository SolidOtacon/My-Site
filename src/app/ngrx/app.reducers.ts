import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

// add app state reducer types here
export interface AppState {
  routes: any; // TODO: add router reducer type
}

// set up the actual reducers for all feature reducers
export const reducers: ActionReducerMap<AppState> = {
  routes: routerReducer
};
