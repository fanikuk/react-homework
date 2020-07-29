import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontWeight: '400',
  color: 'red',
  height: '30px',
};

const ErrorFootnote = ({ error }) => (error ? <span className="error" style={styles}>{error}</span> : null);
export default ErrorFootnote;

ErrorFootnote.defaultProps = {
  error: null,
};

ErrorFootnote.propTypes = {
  error: PropTypes.string,
};
