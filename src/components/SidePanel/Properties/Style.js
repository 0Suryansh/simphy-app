import React from "react";
import './style.css'
import {useSelector} from 'react-redux'
import isEqual from 'lodash/isEqual';
import { framework } from "../../Canvas/bundle";
const colorConvert = require('color-convert');

const Style = () => {
  const selectedShape = useSelector((state) => (state.app.appWindow.shapesManager?.selectedShape),isEqual);
  const appC =useSelector((state)=>state.app.appWindow)

  React.useEffect(()=>{
    if(document.getElementById("style-draw-pattern")){
      document.getElementById("style-draw-pattern").value=selectedShape?.drawPattern
    }
    if(document.getElementById("style-fillColor")){
      let fillCol=[appC.shapesManager?.selectedShape?.fillColor?.r,appC.shapesManager?.selectedShape?.fillColor?.g,appC.shapesManager?.selectedShape?.fillColor?.b]
      let fillColorHex =colorConvert.rgb.hex(fillCol);
      fillColorHex="#"+fillColorHex
    document.getElementById("style-fillColor").value=fillColorHex
    }
    if(document.getElementById("style-drawColor")){
      let drawCol=[appC.shapesManager?.selectedShape?.drawColor?.r,appC.shapesManager?.selectedShape?.drawColor?.g,appC.shapesManager?.selectedShape?.drawColor?.b]
      let drawColorHex =colorConvert.rgb.hex(drawCol);
      drawColorHex="#"+drawColorHex
      document.getElementById("style-drawColor").value=drawColorHex
    }
    if(document.getElementById("style-stroke-width")){
      document.getElementById("style-stroke-width").value=selectedShape?.strokeWidth
    }
  })

  if (!selectedShape) return null;

  const setDrawPattern=async(e)=>{
    document.getElementById("style-draw-pattern").value=e.target.value
    const app3=await appC
		app3.shapesManager.selectedShape.drawPattern=e.target.value
  }
  const setFillColor= async(e)=>{
    document.getElementById("style-fillColor").value=e.target.value
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.shapesManager.selectedShape.fillColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
	}
  const setDrawColor= async(e)=>{
    document.getElementById("style-drawColor").value=e.target.value
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.shapesManager.selectedShape.drawColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
	}
  const setStrokeWidth= async (e)=>{
    document.getElementById("style-stroke-width").value=e.target.value
    const app3=await appC
		app3.shapesManager.selectedShape.strokeWidth=e.target.value
  }

  return (
    <div className="sidebar-properties-accordion-body">
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Draw Pattern</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" id="style-draw-pattern" onChange={setDrawPattern} />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Fill Color</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="color" id="style-fillColor" className="color" onChange={setFillColor}  />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Draw Color</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input id="style-drawColor" type="color" className="color" onChange={setDrawColor} />
        </div>
      </div>
      <div className="sidebar-properties-accordion-body-child">
        <div className="sidebar-properties-accordion-body-child-label">
          <label htmlFor="general-name">Stroke Width</label>
        </div>
        <div className="sidebar-properties-accordion-body-child-input">
          <input type="text" className="text" id="style-stroke-width" onChange={setStrokeWidth} />
        </div>
      </div>
    </div>
  );
};

export default Style;
