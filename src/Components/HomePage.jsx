import React, { Component } from 'react';
import RightSlider from './RightSlider.jsx';
import CreateLinkSheet from './CreateLinkSheet/CreateLinkSheet.jsx';
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <RightSlider action="create" >
          <CreateLinkSheet />
        </RightSlider>
      </div>
    );
  }
}
