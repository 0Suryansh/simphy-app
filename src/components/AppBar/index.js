import React from "react";
import "./index.css";
import FolerPlus from "../../assets/Folder-plus.svg";
import DropDownIcon from "../../assets/chev-down.svg";
import {DropDown, FileHeader} from './DropDown'
import {fileChangeHandler} from '../../utils/appBarFunctions'
import Modal from '../misc/Modal'

export const AppBar = () => {
    const [dropDown,setDropDown]=React.useState([false,false,false,false])
    const [modalIsOpen,setModalIsOpen]=React.useState(false)

    const options = React.useMemo(()=>[
        [{
            icon:FolerPlus,
            desc:"New File"
        },
        {
            icon:FolerPlus,
            desc:"Save File"
        },
        {
            icon:FolerPlus,
            desc:"Import File"
        },
        {
            icon:FolerPlus,
            desc:"Export File"
        }],
        [{
            icon:FolerPlus,
            desc:"New File"
        },
        {
            icon:FolerPlus,
            desc:"Create File"
        },
        {
            icon:FolerPlus,
            desc:"Close File"
        },
        {
            icon:FolerPlus,
            desc:"Import File"
        },
        {
            icon:FolerPlus,
            desc:"Export File"
        }],
        [{
            icon:FolerPlus,
            desc:"op 1"
        },
        {
            icon:FolerPlus,
            desc:"op 2"
        },
        {
            icon:FolerPlus,
            desc:"op 3"
        },
        {
            icon:FolerPlus,
            desc:"op 4"
        }],
        [{
            icon:FolerPlus,
            desc:"Zoom"
        },
        {
            icon:FolerPlus,
            desc:"Layout"
        }],
        [{
            icon:FolerPlus,
            desc:"Documentation"
        },
        {
            icon:FolerPlus,
            desc:"About Simphy"
        },
        {
            icon:FolerPlus,
            desc:"Community"
        }]
    ],[])

    const fileInputRef = React.useRef(null)
    const fileRef = React.useRef(null)
    const editRef= React.useRef(null)
    const viewRef= React.useRef(null)
    const helpRef= React.useRef(null)

  React.useEffect(() => {
    const handleWindowClick = (event) => {
      if (
        !fileRef.current.contains(event.target) &&
        !editRef.current.contains(event.target) &&
        !viewRef.current.contains(event.target) &&
        !helpRef.current.contains(event.target)
      ) {
        setDropDown([false, false, false, false]);
        }
    };

    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  });

  const importJsonHandler = () => {
    fileInputRef.current?.click();
  }
  const modalCallBackFn=(state)=>{
    setModalIsOpen(state)
  }
  const openModal=()=>{
    setModalIsOpen(!modalIsOpen)
  }

    return (
    <>
    <div className="wrapper-app-bar">
      <div className="logo">
        <img src="https://i.postimg.cc/fyg66ZHW/logo1-1.png" alt="logo" />
      </div>
      <div className="divider"></div>

      {/* file */}
      <div className="option" style={{ marginLeft: "1rem", backgroundColor:dropDown[0]?"#46494B":null }} ref={fileRef} onClick={()=>{
        setDropDown([!dropDown[0],false,false,false]);
      }}>
        <img src={FolerPlus} alt="file" />
        <span>File</span>
        <img src={DropDownIcon} alt="file" />
        <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={fileChangeHandler} />

      </div>

      {/* edit */}
      <div className="option" ref={editRef} style={{backgroundColor:dropDown[1]?"#46494B":null }} onClick={()=>{
        setDropDown([false,!dropDown[1],false,false]);
      }}>
        <img src={FolerPlus} alt="file" />
        <span>Edit</span>
        <img src={DropDownIcon} alt="file" />
      </div>

      {/* view */}
      <div className="option" ref={viewRef} style={{backgroundColor:dropDown[2]?"#46494B":null }} onClick={()=>{
        setDropDown([false,false,!dropDown[2],false]);
      }}>
        <img src={FolerPlus} alt="file" />
        <span>View</span>
        <img src={DropDownIcon} alt="file" />
      </div>

      {/* help */}
      <div className="option" ref={helpRef} style={{backgroundColor:dropDown[3]?"#46494B":null }} onClick={()=>{
        setDropDown([false,false,false,!dropDown[3]]);
      }}>
        <img src={FolerPlus} alt="file" />
        <span>Help</span>
        <img src={DropDownIcon} alt="file" />
      </div>

       {/* prefRef */}
       <div className="option" style={{backgroundColor:dropDown[4]?"#46494B":null }} onClick={()=>{
        openModal()
        setDropDown([false,false,false,false]);
       }}>
        <img src={FolerPlus} alt="file" />
        <span>Preferences</span>
      </div>

    </div>
    {dropDown[0] ? <FileHeader id={13.2} importfn={importJsonHandler}/>:null}
    {dropDown[1] && <DropDown id={18.2}  data={options[1]}/>}
    {dropDown[2] && <DropDown id={23.4}  data={options[2]}/>}
    {dropDown[3] && <DropDown id={29.2}  data={options[3]}/>}
    {modalIsOpen && <Modal isOpen={modalCallBackFn} />}
    </>
  );
};

export default AppBar;

// {dropDown[index] && <DropDown data={group} id={index * 3} updateIcon={updateTopIcon} />}