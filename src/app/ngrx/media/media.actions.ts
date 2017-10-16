import { Action } from '@ngrx/store';

export const SET_MEDIA = 'SET_MEDIA';

export class SetMedia implements Action {
  readonly type = SET_MEDIA;

  constructor(public payload: string) {}
}

export type MediaActions = SetMedia;
