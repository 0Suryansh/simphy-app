import React from "react";
import "./style.css";
import { useSelector, useDispatch } from 'react-redux'
import { editProperties } from '../../../actions/index'
import isEqual from 'lodash/isEqual';

const Display = () => {

  const dispatch = useDispatch();

  const selectedShape = useSelector(state => state.app.appWindow.shapesManager?.selectedShape,isEqual);

  
  React.useEffect(()=>{
    if(document.getElementById("display-show-info")){
      document.getElementById("display-show-info").checked=selectedShape?.showInfo
    }
    if(document.getElementById("display-show-eqn")){
      document.getElementById("display-show-eqn").checked=selectedShape?.showEqn
    }
    if(document.getElementById("display-touchability")){
      document.getElementById("display-touchability").checked=selectedShape?.touchable
    }
    if(document.getElementById("display-visibility")){
      document.getElementById("display-visibility").checked=selectedShape?.visible
    }
  })

  if (!selectedShape) return null;

  const handleShowInfoChange = (e) => {
    console.log(e.target.checked)
    document.getElementById("display-show-info").checked=e.target.checked
    dispatch(editProperties(e.target.checked,0));
  }
  const handleShowEqnChange = (e) => {
    document.getElementById("display-show-eqn").checked=e.target.checked
    dispatch(editProperties(e.target.checked,1));
  }
  const handleTouchabilityChange = (e) => {
    document.getElementById("display-touchability").checked=e.target.checked
    dispatch(editProperties(e.target.checked,2));
  }
  const handleVisibilityChange  = (e) => {
    document.getElementById("display-visibility").checked=e.target.checked
    dispatch(editProperties(e.target.checked,3));
  }

  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Show Info</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input id="display-show-info" type="checkbox" className="text" style={{marginLeft:"10px"}} onChange={handleShowInfoChange}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Show Eqn</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input id="display-show-eqn" type="checkbox" className="text" style={{marginLeft:"10px"}} onChange={handleShowEqnChange}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Touchablity</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input id="display-touchability" type="checkbox" className="text" style={{marginLeft:"10px"}} onChange={handleTouchabilityChange}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Visibility</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input id="display-visibility" type="checkbox" className="text" style={{marginLeft:"10px"}} onChange={handleVisibilityChange}/>
        </div>
      </div>
    </div>
  );
};

export default Display;
