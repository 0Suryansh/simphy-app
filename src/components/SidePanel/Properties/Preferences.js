import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import isEqual from "lodash/isEqual";
import {editParam} from '../../../actions/index'
import {useDispatch} from 'react-redux'

const Preferences = () => {

  const selectedShape = useSelector(
    (state) => state.app.appWindow.shapesManager?.selectedShape,
    isEqual
  );

  let i = 0;
  const [prefVal,setPrefVal]=React.useState([])
  if(selectedShape===null){
    prefVal.length=0
  }
  if (selectedShape) {
    prefVal.length=0
    while (true) {
      const ei = selectedShape.getEditInfo(i);
      if (ei === null) {
        break;
      }
      prefVal.push({ name: ei.name, value: ei.value.toString() });
      i++;
    }
  }

  const handleChange=(e)=>{
    for(let j=0;j<prefVal.length;j++){
      if(e.target.name===prefVal[j].name){
        document.getElementById(prefVal[j].name).value=e.target.value
        selectedShape.setEditValue(j,e.target.value)
      }
    }
  }

  React.useEffect(()=>{
    for(let j=0;j<prefVal.length;j++){
      if(document.getElementById(prefVal[j].name)){
        document.getElementById(prefVal[j].name).value=prefVal[j].value
      }
    }
  })

  return (
    <>
          <div className="sidebar-properties-accordion-body">
            {prefVal?.map((val,index) => (
              <div className="sidebar-properties-accordion-body-child" key={index}>
                <div className="sidebar-properties-accordion-body-child-label">
                  <label htmlFor="general-name">{val.name}</label>
                </div>
                <div className="sidebar-properties-accordion-body-child-input">
                <input onChange={handleChange} type="text" className="text" name={val.name} id={val.name} />
                </div>
              </div>
            ))}
          </div>
    </>
  );
};

export default Preferences;
