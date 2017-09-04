import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import englishToBanglaNumber from './../../util/englishToBanglaNumber';
class IntlNumber extends React.Component {
  render() {
    const { value, language } = this.props;
    return (
      <span>{language === 'bn' ? englishToBanglaNumber(value) : value}</span>
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
    language: state.currentLanguage
  }
}

export default connect(mapStateToProps)(IntlNumber);