import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
class IntlText extends React.Component {
  render() {
    const { en, bn, currentLanguage, className, style } = this.props;
    return (
      <span className={className}
            style={style} >{currentLanguage === 'bn' ? bn : en}</span>
    )
  }
}

IntlText.propTypes = {
  en: PropTypes.string,
  bn: PropTypes.string,
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

export default connect(mapStateToProps)(IntlText);