import { TOGGLE_LANGUAGE } from './actions';
const initialState = {
  currentLanguage: 'en',
};

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LANGUAGE: {
      state.currentLanguage = (state.currentLanguage === 'en') ? 'bn' : 'en';
      return state;
    }
    default:
      return state;
  }
}

export default languageProviderReducer;
