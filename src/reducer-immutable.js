import { fromJS } from 'immutable';
import { TOGGLE_LANGUAGE } from './actions';
const initialState = fromJS({
  currentLanguage: 'en',
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LANGUAGE: {
      return state.set('currentLanguage', state.get('currentLanguage') === 'en' ? 'bn' : 'en');
    }
    default:
      return state;
  }
}

export default languageProviderReducer;
