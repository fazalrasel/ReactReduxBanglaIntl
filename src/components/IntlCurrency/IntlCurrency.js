import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import englishToBanglaNumber from './../../util/englishToBanglaNumber';

class IntlCurrency extends React.Component {
  render() {
    const { value, locale } = this.props;
    const getEnglish = () => {
      const { enSymbol, enSymbolPosition } = this.props;
      if (enSymbolPosition === 'right') {
        return value + enSymbol;
      }
      return enSymbol + value;
    };
    const getBangla = () => {
      const { bnSymbol, bnSymbolPosition } = this.props;
      if (bnSymbolPosition === 'right') {
        return englishToBanglaNumber(value) + bnSymbol;
      }
      return bnSymbol + englishToBanglaNumber(value);
    };
    return (
      <span>{locale && locale.currentLanguage === 'bn' ? getBangla() : getEnglish()}</span>
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
  return {
    locale: state.locale
  }
}

export default connect(mapStateToProps)(IntlCurrency);