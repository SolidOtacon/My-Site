import * as MediaActions from './media.actions';

export interface State {
  media: string;
}

const initialState: State = {
  media: ''
};


export function mediaReducer(state = initialState, action: MediaActions.MediaActions) {
  switch (action.type) {
    case MediaActions.SET_MEDIA:
      return {
        media: action.payload
      };
  }
  return state;
}




