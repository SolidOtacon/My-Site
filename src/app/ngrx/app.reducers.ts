import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import * as fromLayout from './layout/layout.reducers';
import * as fromMedia from './media/media.reducers';

// add app state reducer types here
export interface AppState {
  routes: any; // TODO: add router reducer type
  title: fromLayout.State;
  media: fromMedia.State;
}

// set up the actual reducers for all feature reducers
export const reducers: ActionReducerMap<AppState> = {
  routes: routerReducer,
  title: fromLayout.layoutReducer,
  media: fromMedia.mediaReducer
};
