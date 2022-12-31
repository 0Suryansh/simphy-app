import React from 'react'
import './Main.css'
import PlayIcon from '../../assets/BottomNav/play-button-svgrepo-com.svg'
import CursorIcon from '../../assets/BottomNav/mouse-cursor-svgrepo-com.svg'
import RedoIcon from '../../assets/BottomNav/redo-svgrepo-com.svg'
import ReloadIcon from '../../assets/BottomNav/reload-svgrepo-com.svg'
import UndoIcon from '../../assets/BottomNav/undo-svgrepo-com.svg'
import PauseIcon from '../../assets/BottomNav/pause-button-svgrepo-com.svg'
import ZoomIcon from '../../assets/BottomNav/zoom-in-svgrepo-com.svg'
// import ForwardIcon from '../../assets/BottomNav/fast-forward-svgrepo-com.svg'
import GridOnIcon from '../../assets/BottomNav/grid-on-svgrepo-com.svg';
import GridOffIcon from '../../assets/BottomNav/grid-off.svg';
import {useSelector} from 'react-redux'


const BottomButton: React = () => {

  const appC =useSelector((state)=>state.app.appWindow)
  const [paused, setPaused] = React.useState(true)
  const [gridOn,setGridOn] = React.useState(true)

  const showhideGrid= async()=>{
    const app3=await appC
		app3.preferences.showGrid=!app3.preferences.showGrid;
    setGridOn(!gridOn)
	}
  const handlePause = async () => {
    const app3=await appC
    app3.pause();
    setPaused(!paused)
  }

  const handlePlay = async () => {
    const app3=await appC
    app3.resume();
    setPaused(!paused)
  }

  const handleMove = async () => {
    const app3=await appC
    app3.endConstruction();
  }



  return (
    <div className="bottom-nav">
      <img src={CursorIcon} alt="Cursor icon" title="Cursor icon" onClick={handleMove} />
      <img src={ReloadIcon} alt="Reload icon" title="Reload icon" />
      <img src={RedoIcon} alt="Redo icon" title="Redo icon" />
      {paused ? (
        <img src={PlayIcon} alt="Play icon" title="Play Icon" onClick={handlePause} />
      ) : (
        <img src={PauseIcon} alt="Pause icon" title="Pause icon" onClick={handlePlay} />
      )}
      <img src={UndoIcon} alt="Undo icon" title="Undo icon" />
      {/* <img src={ForwardIcon} alt="Forward icon" title="Forward icon" /> */}
      {gridOn ? (
        <img src={GridOnIcon} alt="Play icon" title="Hide Grid" onClick={showhideGrid} />
      ) : (
        <img src={GridOffIcon} alt="Pause icon" title="Show Grid" onClick={showhideGrid} />
      )}
      <img src={ZoomIcon} alt="Zoom icon" title="Zoom icon" />
    </div>
  )
}

export default BottomButton;