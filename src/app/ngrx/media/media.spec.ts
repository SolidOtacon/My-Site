import * as MediaActions from './media.actions';
import * as fromMedia from './media.reducers';

describe('Media', () => {

  let testObj: fromMedia.State;
  const testAction = new MediaActions.SetMedia('test');
  testObj = {
    media: ''
  };

  it('should update media', () => {
    const newState = fromMedia.mediaReducer(testObj, testAction);
    expect(newState.media).toBe('test');
  });
});
