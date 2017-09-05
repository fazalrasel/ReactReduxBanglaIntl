import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import englishToBanglaNumber from './../../util/englishToBanglaNumber';
class IntlNumber extends React.Component {
  render() {
    const { value, currentLanguage, className, style } = this.props;
    return (
      <span className={className}
            style={style} >{currentLanguage === 'bn' ? englishToBanglaNumber(value) : value}</span>
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
  const isMap = state instanceof Map;
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

export default connect(mapStateToProps)(IntlNumber);