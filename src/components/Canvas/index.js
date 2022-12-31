import React from "react";
import "./index.css";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {loadCanvas, cursorInfo} from '../../actions/index'
import store from '../../store/index'
import {MyAppListener} from '../../utils/index'

function Canvas() {
  // const cursorInfo=useSelector((state)=>state.app.cursorInfo)

  
  // const statusInfo=useSelector((state)=>state.app.statusInfo)


  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadCanvas())
  });

  return (
    <>
      <canvas
        className="canvas"
        id="canvas"
        width="1250px"
        height="700px"
      ></canvas>
      <div className="status-bar" id="status"></div>
    </>
  );
}

export default Canvas;
