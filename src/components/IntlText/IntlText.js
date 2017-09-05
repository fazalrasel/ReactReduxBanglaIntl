import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class IntlText extends React.Component {
  render() {
    const { en, bn, locale } = this.props;
    return (
      <span>{locale && locale.currentLanguage === 'bn' ? bn : en}</span>
    )
  }
}

IntlText.propTypes = {
  en: PropTypes.string,
  bn: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    locale: state.locale
  }
}

export default connect(mapStateToProps)(IntlText);