import React, { PropTypes } from 'react';
import { isImmutableMap } from './../../util/immutableCheck';
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

export default connect(mapStateToProps)(IntlText);