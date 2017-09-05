import expect from 'expect';
import reducer from './reducer-immutable';
import toggleLanguage from './actions';
describe('reducer Immutable', () => {
  it('should have default currentLanguage en', () => {
    expect(reducer(undefined, { type: 'Nothing' }).get('currentLanguage')).toEqual('en');
  });
  it('should have change currentLanguage to bn when toggleAction Called', () => {
    expect(reducer(undefined, toggleLanguage()).get('currentLanguage')).toEqual('bn');
  });
});

