import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import * as fromLayout from './layout/layout.reducers';

// add app state reducer types here
export interface AppState {
  routes: any; // TODO: add router reducer type
  title: fromLayout.State;
}

// set up the actual reducers for all feature reducers
export const reducers: ActionReducerMap<AppState> = {
  routes: routerReducer,
  title: fromLayout.layoutRecuder
};
