import React from 'react'
import './Main.css'
import PlayIcon from '../../assets/BottomNav/play-button-svgrepo-com.svg'
import CursorIcon from '../../assets/BottomNav/mouse-cursor-svgrepo-com.svg'
import RedoIcon from '../../assets/BottomNav/redo-svgrepo-com.svg'
import ReloadIcon from '../../assets/BottomNav/reload-svgrepo-com.svg'
import UndoIcon from '../../assets/BottomNav/undo-svgrepo-com.svg'
import PauseIcon from '../../assets/BottomNav/pause-button-svgrepo-com.svg'
import ZoomIcon from '../../assets/BottomNav/zoom-in-svgrepo-com.svg'
import ForwardIcon from '../../assets/BottomNav/fast-forward-svgrepo-com.svg'

const BottomButton: React.FC = () => {
  const [paused, setPaused] = React.useState(true)

  const handleClick = () => {
    setPaused(!paused)
  }

  return (
    <div className="bottom-nav">
      <img src={CursorIcon} alt="Cursor icon" title="Cursor icon" />
      <img src={ReloadIcon} alt="Reload icon" title="Reload icon" />
      <img src={RedoIcon} alt="Redo icon" title="Redo icon" />
      {paused ? (
        <img src={PlayIcon} alt="Play icon" title="Play Icon" onClick={handleClick} />
      ) : (
        <img src={PauseIcon} alt="Pause icon" title="Pause icon" onClick={handleClick} />
      )}
      <img src={UndoIcon} alt="Undo icon" title="Undo icon" />
      <img src={ForwardIcon} alt="Forward icon" title="Forward icon" />
      <img src={ZoomIcon} alt="Zoom icon" title="Zoom icon" />
    </div>
  )
}

export default BottomButton;
