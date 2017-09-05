import { TOGGLE_LANGUAGE } from './actions';
const initialState = {
  currentLanguage: 'en',
};

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LANGUAGE: {
      return Object.assign({}, state, {
        currentLanguage: ("en" === state.currentLanguage) ? "bn" : "en",
      })
    }
    default:
      return state;
  }
}

export default languageProviderReducer;
