import expect from 'expect';
import reducer from './reducer';
import toggleLanguage from './actions';
describe('reducer', () => {
  it('should have default currentLanguage en', () => {
    expect(reducer(undefined, { type: 'Nothing' }).currentLanguage).toEqual('en');
  });
  it('should have change currentLanguage to bn when toggleAction Called', () => {
    expect(reducer(undefined, toggleLanguage()).currentLanguage).toEqual('bn');
  });
});

