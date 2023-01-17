import React from "react";
import './style.css'
import {useSelector} from 'react-redux'
import isEqual from 'lodash/isEqual';

const General = () => {

  const selectedShape = useSelector((state) => (state.app.appWindow.shapesManager?.selectedShape),isEqual);

  if (!selectedShape) return null;

  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Name</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={selectedShape?selectedShape.name:""}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Info</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={selectedShape?selectedShape.name:""} />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Expression</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={selectedShape?.expr?selectedShape.expr:""}/>
        </div>
      </div>
    </div>
  );
};

export default General;
