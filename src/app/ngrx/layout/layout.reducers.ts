import * as LayoutActions from './layout.actions';

export interface State {
  title: string;
}

const initialState: State = {
  title: ''
};


export function layoutRecuder(state = initialState, action: LayoutActions.LayoutActions) {
  switch (action.type) {
    case LayoutActions.SET_PAGE_TITLE:
      return {
        title: action.payload
      };
  }
  return state;
}




