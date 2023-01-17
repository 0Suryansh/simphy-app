import React from "react";
import "./Modal.css";
import { useSelector } from "react-redux";
import { framework } from "../Canvas/bundle";
const colorConvert = require("color-convert");

const Modal = ({isOpen}) => {
  const appC = useSelector((state) => state.app.appWindow);

  React.useEffect(()=>{
    if(document.getElementById("preference-bg-color")){
      let bgCol=[appC?.preferences?.backgroundColor?.r,appC?.preferences?.backgroundColor?.g,appC?.preferences?.backgroundColor?.b]
      let bgColorHex =colorConvert.rgb.hex(bgCol);
      bgColorHex="#"+bgColorHex
      document.getElementById("preference-bg-color").value=bgColorHex
    }
    if(document.getElementById("preference-axis-color")){
      let bgCol=[appC?.preferences?.axisColor?.r,appC?.preferences?.axisColor?.g,appC?.preferences?.axisColor?.b]
      let bgColorHex =colorConvert.rgb.hex(bgCol);
      bgColorHex="#"+bgColorHex
      document.getElementById("preference-axis-color").value=bgColorHex
    }
    if(document.getElementById("preference-grid-color")){
      let bgCol=[appC?.preferences?.gridColor?.r,appC?.preferences?.gridColor?.g,appC?.preferences?.gridColor?.b]
      let bgColorHex =colorConvert.rgb.hex(bgCol);
      bgColorHex="#"+bgColorHex
      document.getElementById("preference-grid-color").value=bgColorHex
    }
    if(document.getElementById("preference-text-color")){
      let bgCol=[appC?.preferences?.textColor?.r,appC?.preferences?.textColor?.g,appC?.preferences?.textColor?.b]
      let bgColorHex =colorConvert.rgb.hex(bgCol);
      bgColorHex="#"+bgColorHex
      document.getElementById("preference-text-color").value=bgColorHex
    }
    if(document.getElementById("preference-virtual-rays-color")){
      let bgCol=[appC?.preferences?.virtualRaysColor?.r,appC?.preferences?.virtualRaysColor?.g,appC?.preferences?.virtualRaysColor?.b]
      let bgColorHex =colorConvert.rgb.hex(bgCol);
      bgColorHex="#"+bgColorHex
      document.getElementById("preference-virtual-rays-color").value=bgColorHex
    }
    if(document.getElementById("preference-grid-size")){
      document.getElementById("preference-grid-size").value=appC?.preferences?.gridSize
    }
    if(document.getElementById("preference-show-axis")){

      document.getElementById("preference-show-axis").checked=appC?.preferences?.showAxis
    }
    if(document.getElementById("preference-show-grid")){

      document.getElementById("preference-show-grid").checked=appC?.preferences?.showGrid
    }
  })

  const showhideGrid = async () => {
    const app3 = await appC;
    app3.preferences.showGrid = !app3.preferences.showGrid;
  };
  const showhideAxis = async () => {
    const app3 = await appC;
    app3.preferences.showAxis = !app3.preferences.showAxis;
  };

  const setBackgroundColor = async (e) => {
    const app3 = await appC;
    const rgbColor = colorConvert.hex.rgb(e.target.value);
    app3.preferences.backgroundColor = new framework.Color(
      rgbColor[0],
      rgbColor[1],
      rgbColor[2]
    );
  };

  const setAxisColor = async (e) => {
    const app3 = await appC;
    const rgbColor = colorConvert.hex.rgb(e.target.value);
    app3.preferences.axisColor = new framework.Color(
      rgbColor[0],
      rgbColor[1],
      rgbColor[2]
    );
  };

  const setGridColor = async (e) => {
    const app3 = await appC;
    const rgbColor = colorConvert.hex.rgb(e.target.value);
    app3.preferences.gridColor = new framework.Color(
      rgbColor[0],
      rgbColor[1],
      rgbColor[2]
    );
  };

  const setTextColor = async (e) => {
    const app3 = await appC;
    const rgbColor = colorConvert.hex.rgb(e.target.value);
    app3.preferences.textColor = new framework.Color(
      rgbColor[0],
      rgbColor[1],
      rgbColor[2]
    );
  };

  const setVirtualRaysColor = async (e) => {
    const app3 = await appC;
    const rgbColor = colorConvert.hex.rgb(e.target.value);
    app3.preferences.virtualRaysColor = new framework.Color(
      rgbColor[0],
      rgbColor[1],
      rgbColor[2]
    );
  };

  const changeGridSize = async (e) => {
    const app3 = await appC;
    app3.preferences.gridSize = e.target.value;
  };

  return (
    <div className="preferences-wrapper">
      <h2 className="preferences-heading">Preferences</h2>
      <div className="preferences-properties">
      <div>
        <div className="preferences-option">
          <label htmlFor="background-color">Background Color:</label>
          <input type="color" className="input" id="preference-bg-color" onChange={setBackgroundColor} />
        </div>
        <div className="preferences-option">
          <label htmlFor="axis-color">Axis Color</label>
          <input type="color" className="input" id="preference-axis-color" onChange={setAxisColor} />
        </div>
        <div className="preferences-option">
          <label htmlFor="grid-color">Grid Color</label>
          <input type="color" className="input" id="preference-grid-color" onChange={setGridColor} />
        </div>
        <div className="preferences-option">
          <label htmlFor="text-color">Text Color</label>
          <input type="color" className="input" id="preference-text-color" onChange={setTextColor} />
        </div>
      </div>
      <div>
        <div className="preferences-option">
          <label htmlFor="virtual-ray-color">Virtual Ray Color</label>
          <input
            type="color"
            className="input"
            id="preference-virtual-rays-color"
            onChange={setVirtualRaysColor}
          />
        </div>
        <div className="preferences-option">
          <label htmlFor="grid-size">Grid Size</label>
          <input
            type="number"
            className="input"
            onChange={changeGridSize}
            id="preference-grid-size"
            defaultValue={appC?.preferences ? appC.preferences.gridSize : ""}
          />
        </div>
        <div className="preferences-option">
          <label htmlFor="show-axis">Show Axis</label>
          <input
            type="checkbox"
            className="input"
            id="preference-show-axis"
            onClick={showhideAxis}
          />
        </div>
        <div className="preferences-option">
          <label htmlFor="show-grid">Show Grid</label>
          <input
            type="checkbox"
            className="input"
            id="preference-show-grid"
            onClick={showhideGrid}
          />
        </div>
      </div>
      </div>
      <div className="modal-close-button">
        <button onClick={()=>{
          isOpen(false)
        }}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
