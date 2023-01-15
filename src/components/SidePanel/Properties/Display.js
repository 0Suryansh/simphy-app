import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from 'react-redux'
import { editProperties } from '../../../actions/index'
import isEqual from 'lodash/isEqual';

const Display = () => {

  const dispatch = useDispatch();

  const selectedShape = useSelector(state => state.app.appWindow.shapesManager?.selectedShape,isEqual);

  console.log(selectedShape)
  const [showEqn, setShowEqn] = useState(selectedShape && selectedShape.showEqn);
  const [showInfo, setShowInfo] = useState(selectedShape && selectedShape.showInfo);
  const [touchability,setTouchability] = useState(selectedShape && selectedShape.touchable);
  const [visible,setVisible] = useState(selectedShape && selectedShape.visible);
  
  console.log(touchability)
  if (!selectedShape) return null;

  const handleShowInfoChange = (e) => {
    setShowInfo(e.target.checked);
    dispatch(editProperties(e.target.checked,0));
  }
  const handleShowEqnChange = (e) => {
    setShowEqn(e.target.checked);
    dispatch(editProperties(e.target.checked,1));
  }
  const handleTouchabilityChange = (e) => {
    setTouchability(e.target.checked);
    dispatch(editProperties(e.target.checked,2));
  }
  const handleVisibilityChange  = (e) => {
    setVisible(e.target.checked);
    dispatch(editProperties(e.target.checked,3));
  }

  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Show Info</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="checkbox" className="text" style={{marginLeft:"10px"}} checked={showInfo} onChange={handleShowInfoChange}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Show Eqn</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="checkbox" className="text" style={{marginLeft:"10px"}} checked={showEqn} onChange={handleShowEqnChange}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Touchablity</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="checkbox" className="text" style={{marginLeft:"10px"}} checked={touchability} onChange={handleTouchabilityChange}/>
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Visibility</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="checkbox" className="text" style={{marginLeft:"10px"}} checked={visible} onChange={handleVisibilityChange}/>
        </div>
      </div>
    </div>
  );
};

export default Display;
