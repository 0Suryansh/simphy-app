import React from "react";
import "./style.css";
import {useSelector} from 'react-redux'
import isEqual from 'lodash/isEqual';

const Dynamic = () => {

  const allShape = useSelector((state) => (state.app.appWindow.shapesManager?.selectedShape),isEqual);

  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">ShowName</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="checkbox" className="text" style={{marginLeft:"10px"}} checked={allShape?.showName ? true : false}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">ShowInfo</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="checkbox" className="text" style={{marginLeft:"10px"}} checked={allShape?.showEqn ? true : false}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Touchable</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="checkbox" className="text" style={{marginLeft:"10px"}} checked={allShape?.touchable ? true : false}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Visibility</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" value={allShape? allShape.visible:""}/>
        </div>
      </div>
      {/* <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">
            Inertia (Kg-m<sup>2</sup>)
          </label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Charge (&mu;C)</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Restitution</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Friction</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" />
        </div>
      </div> */}
    </div>
  );
};

export default Dynamic;
