import * as LayoutActions from './layout.actions';
import * as fromLayout from './layout.reducers';

describe('Layout', () => {

  let testObj: fromLayout.State;
  const testAction = new LayoutActions.SetPageTitle('test');
  testObj = {
    title: ''
  };

  it('should update title', () => {
    const newState = fromLayout.layoutReducer(testObj, testAction);
    expect(newState.title).toBe('test');
  });
});
