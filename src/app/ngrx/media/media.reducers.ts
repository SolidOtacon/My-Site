import * as MediaActions from './media.actions';

export interface State {
  activeMedia: string;
}

const initialState: State = {
  activeMedia: ''
};


export function mediaReducer(state = initialState, action: MediaActions.MediaActions) {
  switch (action.type) {
    case MediaActions.SET_MEDIA:
      return {
        activeMedia: action.payload
      };
  }
  return state;
}




