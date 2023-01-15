import React from "react";
import "./Modal.css";
import {useSelector} from 'react-redux'
import { framework } from "../Canvas/bundle";
const colorConvert = require('color-convert');


const Modal = () => {

  const appC =useSelector((state)=>state.app.appWindow)
  const [gridOn,setGridOn] = React.useState(true)
  const [axisOn,setAxisOn] = React.useState(true)

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
    console.log(app3)
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
        <input type="color" className="input"/>
      </div>
      <div className="preferences-option">
        <label htmlFor="grid-color">Grid Color</label>
        <input type="color" className="input"/>
      </div>
      <div className="preferences-option">
        <label htmlFor="text-color">Text Color</label>
        <input type="color" className="input"/>
      </div>
      <div className="preferences-option">
        <label htmlFor="virtual-ray-color">Virtual Ray Color</label>
        <input type="color" className="input"/>
      </div>
      <div className="preferences-option">
        <label htmlFor="grid-size">Grid Size</label>
        <input type="number" className="input"/>
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
