import './App.css'
import TopBarPrimary from './components/TopBarPrimary/Main'
import SideBar from './components/SidePanel/Main'
import Canvas from './components/Canvas'
import BottomButtons from './components/BottomButtons/Main'
// import Footer from './components/Footer/Main'

function App() {
  return (
    <div className="App">
      <TopBarPrimary/>
      <SideBar/>
      <Canvas/>
      <BottomButtons/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
