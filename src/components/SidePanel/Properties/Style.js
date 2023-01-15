import React from "react";
import './style.css'
import {useSelector} from 'react-redux'
import isEqual from 'lodash/isEqual';
import { framework } from "../../Canvas/bundle";
const colorConvert = require('color-convert');

const Style = () => {
  const allShape = useSelector((state) => (state.app.appWindow.shapesManager?.selectedShape),isEqual);
  const appC =useSelector((state)=>state.app.appWindow)
  

  const setFillColor= async(e)=>{
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.shapesManager.selectedShape.fillColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
	}
  const setDrawColor= async(e)=>{
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.shapesManager.selectedShape.drawColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
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
          <input type="color" className="color" onChange={setFillColor} />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Draw Color</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="color" className="color" onChange={setDrawColor} />
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
