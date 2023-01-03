import React from "react";
import "./index.css";
import {useDispatch} from 'react-redux'
import {loadCanvas} from '../../actions/index'

function Canvas() {

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
