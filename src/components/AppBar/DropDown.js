import * as React from 'react';
import './DropDown.css';
import {exportAsJson} from '../../utils/appBarFunctions'
import FolerPlus from "../../assets/Folder-plus.svg";
import {fileChangeHandler} from '../../utils/appBarFunctions'


const DropDown = ({ data, id }) => {

  return (
    <div className="dropdown" style={{ left:id+"rem", top:"3rem"}}>
      {data?.map((info) => (
        <div
          className="dropdown-menuItem"
        >
          <img
            src={info.icon}
            alt="dropdown"
            className="dropdown-menuItem-icon"
          />
          <p className="dropdown-menuItem-description">{info.desc}</p>
        </div>
      ))}
    </div>
  );
};

const FileHeader = (props) => {
  const handleClick = () => {
    props.importfn()
    console.log("m")
  };  

  return (
    <div className="dropdown" style={{ left:props.id+"rem", top:"3rem"}}>
        <div
          className="dropdown-menuItem"
        >
          <img
            src={FolerPlus}
            alt="dropdown"
            className="dropdown-menuItem-icon"
          />
          <p className="dropdown-menuItem-description">New File</p>
        </div>
        <div
          className="dropdown-menuItem"
        >
          <img
            src={FolerPlus}
            alt="dropdown"
            className="dropdown-menuItem-icon"
          />
          <p className="dropdown-menuItem-description">Save File</p>
        </div>
        <div
          className="dropdown-menuItem"
          onClick={handleClick}
        >
          <img
            src={FolerPlus}
            alt="dropdown"
            className="dropdown-menuItem-icon"
          />
          <p className="dropdown-menuItem-description">Import File</p>
        </div>
        <div
          className="dropdown-menuItem"
          onClick={()=>{
            exportAsJson()
          }}
        >
          <img
            src={FolerPlus}
            alt="dropdown"
            className="dropdown-menuItem-icon"
          />
          <p className="dropdown-menuItem-description">Export File</p>
        </div>
    </div>
  );
};

export {DropDown, FileHeader};
