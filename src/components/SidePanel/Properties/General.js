import React from "react";
import './style.css'
import {useSelector} from 'react-redux'
import isEqual from 'lodash/isEqual';

const General = () => {

  const allShape = useSelector((state) => (state.app.appWindow.shapesManager?.selectedShape),isEqual);

  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Name</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={allShape?allShape.name:""}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Info</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={allShape?allShape.name:""}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Expression</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={allShape?.expr?allShape.expr:""}/>
        </div>
      </div>
      {/* <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Outline Color</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="color" className="color" />
        </div>
      </div> */}
      {/* <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Fill Color</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="color" className="color" />
        </div>
      </div> */}
      {/* <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Opacity</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div> */}
    </div>
  );
};

export default General;
