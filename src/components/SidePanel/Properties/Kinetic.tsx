import React from "react";
import './style.css'

const Kinetic = () => {
  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Position-x</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Position-y</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Velocity-x (m/s)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Velocity-y (m/s)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Angle (radians)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">And. Speed (/s)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
    </div>
  );
};

export default Kinetic;
