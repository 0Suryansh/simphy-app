import React from 'react'
import AppBar from './components/AppBar'
import TopBarPrimary from './components/TopBarPrimary/Main'
import SideBar from './components/SidePanel/Main'
import Canvas from './components/Canvas'
import BottomButtons from './components/BottomButtons/Main'
// import Footer from './components/Footer/Main'
import Modal from './components/misc/Modal'

function App() {

  return (
    <div className="App">
      <AppBar/>
      <TopBarPrimary/>
      <SideBar/>
      <Canvas/>
      <BottomButtons/>
      <Modal/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
