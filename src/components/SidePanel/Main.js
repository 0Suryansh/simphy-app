import React from 'react'
import './Main.css'
import Dynamic from './Properties/Dynamic'
import General from './Properties/General'
import Kinetic from './Properties/Kinetic'
import Collision from './Properties/Collision'
import TreeView from './TreeView/index'

const SidePanel= () => {
  return (
    <div className="sidebar">
      <div className="sidebar-file-explorer">
        <TreeView/>
      </div>
      <div className="sidebar-properties">
        <div>
          <div className="sidebar-properties-heading">
            <span>(Property)</span>
            <span>(Value)</span>
          </div>
          <div className="sidebar-properties-body">
            <details className="sidebar-properties-accordion">
              <summary className="sidebar-properties-accordion-head">General</summary>
              <General />
            </details>
            <details className="sidebar-properties-accordion">
              <summary className="sidebar-properties-accordion-head">Display</summary>
              <Dynamic />
            </details>
            <details className="sidebar-properties-accordion">
              <summary className="sidebar-properties-accordion-head">Style</summary>
              <Kinetic />
            </details>
            {/* <details className="sidebar-properties-accordion">
              <summary className="sidebar-properties-accordion-head">Collision</summary>
              <Collision />
            </details> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidePanel
