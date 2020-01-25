import React from 'react';
import PropTypes from 'prop-types'
import "./RightSlider.css";

const RightSlider = props => {

  return (
    <div className="right-slider">
      { props.children }
    </div>
  )
}

RightSlider.propTypes = {
  action: PropTypes.string
}

export default RightSlider
