import React, { PropTypes } from 'react';
import { isImmutableMap } from './../../util/immutableCheck';
import { connect } from 'react-redux';
import englishToBanglaNumber from './../../util/englishToBanglaNumber';

class IntlCurrency extends React.Component {
  render() {
    const { value, currentLanguage, enSymbol, enSymbolPosition, bnSymbol, bnSymbolPosition, className, style } = this.props;
    const getEnglish = () => {
      if (enSymbolPosition === 'right') {
        return value + enSymbol;
      }
      return enSymbol + value;
    };
    const getBangla = () => {
      if (bnSymbolPosition === 'right') {
        return englishToBanglaNumber(value) + bnSymbol;
      }
      return bnSymbol + englishToBanglaNumber(value);
    };
    return (
      <span className={className}
            style={style} >{currentLanguage === 'bn' ? getBangla() : getEnglish()}</span>
    )
  }
}

IntlCurrency.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  enSymbol: PropTypes.string,
  bnSymbol: PropTypes.string,
  enSymbolPosition: PropTypes.string,
  bnSymbolPosition: PropTypes.string,
};

IntlCurrency.defaultProps = {
  enSymbol: 'BDT',
  bnSymbol: 'টাকা',
  enSymbolPosition: 'left',
  bnSymbolPosition: 'left'
};

function mapStateToProps(state) {
  const isMap = isImmutableMap(state);
  let currentLanguage = undefined;
  if (isMap) {
    currentLanguage = state.getIn(['locale', 'currentLanguage']);
  } else {
    if (state.locale && state.locale.currentLanguage) {
      currentLanguage = state.locale.currentLanguage;
    }
  }
  return {
    currentLanguage
  }
}

export default connect(mapStateToProps)(IntlCurrency);