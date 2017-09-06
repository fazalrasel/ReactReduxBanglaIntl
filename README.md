## Synopsis

Tiny Simple React Redux Bangla Locale Support.

## Code Example

Most of the times I just need to support only two languages (English and Bangla). For this its seems unnecessary to implement
react-intl like packages. As this package is not using Browser Intl API, thus you don't have to worry about Browser support.
It will work as it just simple javascript.

## Installation

`npm install react-redux-bangla-intl --save-dev`

    ### add BanglaIntl Reducer to your store
##### =at `store.js`
```
..... your other imports....
import {reducer as BanglaIntlReducer} from 'react-redux-bangla-intl';
#import {reducerImmutable as BanglaIntlReducer} from 'react-redux-bangla-intl'; // reducer for immutablejs store.
import { combineReducers } from 'redux';
#import { combineReducers } from 'redux-immutable'; // when immutablejs used.
```

```
const store = combineReducers({
    ..other reducers..
    locale : BanglaIntlReducer,
});
```

export default store;

## API Reference

#### Changing `currentLanguage`
You need to dispatch actions to reducer to change `currentLanguage`. It can be done by direct dispatching action 
or from inside redux connected component (mapDispatchToProps).

```
import {toggleLanguage} from 'react-redux-bangla-intl';

store.dispatch(toggleLanguage());

```

#### components

###### IntlText
```
props {
    en,
    bn
}

import {IntlText} from 'react-redux-bangla-intl';

<IntlText en="Bangladesh" bn="বাংলাদেশ"/>

```

###### IntlNumber
```
props {
    value
}

import {IntlNumber} from 'react-redux-bangla-intl';

<IntlNumber value="1234" />

```

###### IntlCurrency
```
props {
  value: '', // string or number
  enSymbol: 'BDT', // any string
  bnSymbol: 'টাকা', // any string
  enSymbolPosition: 'left', //right
  bnSymbolPosition: 'left' // right
}

import {IntlCurrency} from 'react-redux-bangla-intl';

<IntlCurrency value="5050" />

```




## Tests

`npm run test`

## Contributors

Any suggestion is welcome.

## License

MIT