import React from "react";
import './style.css'
import {useSelector} from 'react-redux'
import isEqual from 'lodash/isEqual';

const Style = () => {
  const allShape = useSelector((state) => (state.app.appWindow.shapesManager?.selectedShape),isEqual);

  const handleColorChange=(e)=>{
    console.log(e.target.value)
  }

  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Draw Pattern</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={allShape?allShape.drawPattern:""}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Fill Color</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="color" className="color" onChange={handleColorChange} />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Draw Color</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="color" className="color" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Stroke Width</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={allShape?.strokeWidth?allShape.strokeWidth:""}/>
        </div>
      </div>
      {/* <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Angle (radians)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">And. Speed (/s)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div> */}
    </div>
  );
};

export default Style;
