import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class IntlText extends React.Component {
  render() {
    const { en, bn, language } = this.props;
    return (
      <span>{language === 'bn' ? bn : en}</span>
    )
  }
}

IntlText.propTypes = {
  en: PropTypes.string,
  bn: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    language: state.currentLanguage
  }
}

export default connect(mapStateToProps)(IntlText);