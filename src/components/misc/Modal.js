import React from "react";
import "./Modal.css";
import {useSelector} from 'react-redux'
import { framework } from "../Canvas/bundle";
const colorConvert = require('color-convert');


const Modal = () => {

  const appC =useSelector((state)=>state.app.appWindow)
  console.log(appC)
  const [gridOn,setGridOn] = React.useState(true)
  const [axisOn,setAxisOn] = React.useState(true)
  // const [gridSize,setGridSize] = React.useState(appC?.preferences.gridSize)

  const showhideGrid= async()=>{
    const app3=await appC
		app3.preferences.showGrid=!app3.preferences.showGrid;
    setGridOn(!gridOn)
	}
  const showhideAxis= async()=>{
    const app3=await appC
		app3.preferences.showAxis=!app3.preferences.showAxis;
    setAxisOn(!axisOn)
	}

  const setBackgroundColor= async(e)=>{
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.preferences.backgroundColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
  }

  const setAxisColor= async(e)=>{
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.preferences.axisColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
  }

  const setGridColor= async(e)=>{
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.preferences.gridColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
  }

  const setTextColor= async(e)=>{
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.preferences.textColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
  }

  const setVirtualRaysColor= async(e)=>{
    const app3=await appC
    const rgbColor = colorConvert.hex.rgb(e.target.value);
		app3.preferences.virtualRaysColor=new framework.Color(rgbColor[0], rgbColor[1], rgbColor[2]);
  }


  const changeGridSize= async(e)=>{
    const app3=await appC
    console.log(e.target.value)
		app3.preferences.gridSize=e.target.value;
    // setGridSize(e.target.value)
    // console.log(gridSize)
  }

  return (
    <div className="preferences-wrapper">
      <h2 className="preferences-heading">Preferences</h2>
      <div className="preferences-option">
        <label htmlFor="background-color">Background Color:</label>
        <input type="color" className="input" onChange={setBackgroundColor}/>
      </div>
      <div className="preferences-option">
        <label htmlFor="axis-color">Axis Color</label>
        <input type="color" className="input" onChange={setAxisColor} />
      </div>
      <div className="preferences-option">
        <label htmlFor="grid-color">Grid Color</label>
        <input type="color" className="input" onChange={setGridColor} />
      </div>
      <div className="preferences-option">
        <label htmlFor="text-color">Text Color</label>
        <input type="color" className="input" onChange={setTextColor} />
      </div>
      <div className="preferences-option">
        <label htmlFor="virtual-ray-color">Virtual Ray Color</label>
        <input type="color" className="input" onChange={setVirtualRaysColor} />
      </div>
      <div className="preferences-option">
        <label htmlFor="grid-size">Grid Size</label>
        <input type="number" className="input" onChange={changeGridSize} />
      </div>
      <div className="preferences-option">
        <label htmlFor="show-axis">Show Axis</label>
        <input type="checkbox" className="input" onClick={showhideAxis} checked={axisOn}/>
      </div>
      <div className="preferences-option">
        <label htmlFor="show-grid">Show Grid</label>
        <input type="checkbox" className="input" onClick={showhideGrid} checked={gridOn}/>
      </div>
    </div>
  );
};

export default Modal;
