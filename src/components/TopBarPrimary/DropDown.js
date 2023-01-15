import * as React from 'react';
import './DropDown.css';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {activeTool} from '../../actions/index'


const DropDown = ({ data, id, updateIcon }) => {
  const idx=useSelector((state)=>state.app.activeIcon)
  let dispatch=useDispatch()
  const appC =useSelector((state)=>state.app.appWindow)

  const createGeom = async (clazz) => {
    const app=await appC
    if (!clazz) app.endConstruction();
    app.beginConstruction(clazz);
    console.log(`create class ${clazz}`);
  };

  return (
    <div className="dropdown" style={{ left: id === 0 ? "1rem" : id + "rem", top:"6rem"}}>
      {data?.map((url) => (
        <div
          className="dropdown-menuItem"
          onClick={() => {
            const index = id / 3;
            updateIcon(index, url.icon, url.desc);
            dispatch(activeTool(id/3))
            createGeom(url.clickFn)
          }}
        >
          <img
            src={url.icon}
            alt="dropdown"
            className="dropdown-menuItem-icon"
          />
          <p className="dropdown-menuItem-description">{url.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
