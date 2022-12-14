import React from "react";
import './style.css'

const Collision = () => {
  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Category</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Collides with</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Z-Order</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
    </div>
  );
};

export default Collision;
