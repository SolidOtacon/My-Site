import { Action } from '@ngrx/store';

export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';

export class SetPageTitle implements Action {
  readonly type = SET_PAGE_TITLE;

  constructor(public payload: string) {}
}

export type LayoutActions = SetPageTitle;
