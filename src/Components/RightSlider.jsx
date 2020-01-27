import React from 'react';
import PropTypes from 'prop-types'
import "./RightSlider.css";

const RightSlider = ({ action, children }) => {

  
  const renderHeader = () => {
    const headerTitles = {
      create: <div>create link</div>
    }

    return headerTitles[action];
  }

  return (
    <div className="right-slider">
      <div className="slider-header">
        { renderHeader() }
      </div>
      { children }
    </div>
  )
}

RightSlider.propTypes = {
  action: PropTypes.string
}

export default RightSlider
