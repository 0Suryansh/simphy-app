import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import isEqual from "lodash/isEqual";
import {editParam} from '../../../actions/index'
import {useDispatch} from 'react-redux'

const Preferences = () => {

  const allShape = useSelector(
    (state) => state.app.appWindow.shapesManager?.selectedShape,
    isEqual
  );
  let i = 0;
  const [prefVal,setPrefVal]=React.useState([])
  if(allShape===null){
    prefVal.length=0
  }
  if (allShape) {
    prefVal.length=0
    while (true) {
      const ei = allShape.getEditInfo(i);
      if (ei === null) {
        break;
      }
      prefVal.push({ name: ei.name, value: ei.value.toString() });
      i++;
      // allShape.setValueAt(ei.name,index,0)
    }
    console.log(prefVal)
  }

  const handleChange=(e)=>{

    console.log(prefVal)

    for(let j=0;j<prefVal.length;j++){
      if(e.target.name===prefVal[j].name){
        allShape.setEditValue(j,e.target.value)
      }
    }
  }

  return (
    <>
          <div className="sidebar-properties-accordion-body">
            {prefVal?.map((val,index) => (
              <div className="sidebar-properties-accordion-body-child" key={index}>
                <div className="sidebar-properties-accordion-body-child-label">
                  <label htmlFor="general-name">{val.name}</label>
                </div>
                <div className="sidebar-properties-accordion-body-child-input">
                <input onChange={handleChange} type="text" className="text" value={val.value} name={val.name}/>
                </div>
              </div>
            ))}
          </div>
    </>
  );
};

export default Preferences;
