import React from "react";
import "./style.css";

const Dynamic = () => {
  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Mass Type</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Gravity Scale</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Mass (Kg)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">
            Inertia (Kg-m<sup>2</sup>)
          </label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Charge (&mu;C)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Restitution</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label for="general-name">Friction</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
