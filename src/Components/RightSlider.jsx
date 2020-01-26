import React from 'react';
import PropTypes from 'prop-types'
import "./RightSlider.css";

const RightSlider = props => {

  return (
    <div className="right-slider">
      <div className="slider-header">
        <div>create link</div>
      </div>
      { props.children }
    </div>
  )
}

RightSlider.propTypes = {
  action: PropTypes.string
}

export default RightSlider
