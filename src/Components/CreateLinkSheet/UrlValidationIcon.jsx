import React from 'react';
import PropTypes from 'prop-types'

const UrlValidationIcon = ({ isValid }) => (
  <div className="url-icon">
    { isValid ? "valid" : "invalid" }
  </div>
)

UrlValidationIcon.propTypes = {
  isValid: PropTypes.bool
}

export default UrlValidationIcon;