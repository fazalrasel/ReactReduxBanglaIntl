import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import englishToBanglaNumber from './../../util/englishToBanglaNumber';
class IntlNumber extends React.Component {
  render() {
    const { value, locale } = this.props;
    return (
      <span>{locale && locale.currentLanguage === 'bn' ? englishToBanglaNumber(value) : value}</span>
    )
  }
}

IntlNumber.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

function mapStateToProps(state) {
  return {
    locale: state.locale
  }
}

export default connect(mapStateToProps)(IntlNumber);