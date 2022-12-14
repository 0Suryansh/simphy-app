import React from 'react'
import './Main.css'
import Dynamic from './Properties/Dynamic'
import General from './Properties/General'
import Kinetic from './Properties/Kinetic'
import Collision from './Properties/Collision'
import GmailTreeView from './FolderTree/Main'

const SidePanel= () => {
  return (
    <div className="sidebar">
      <div className="sidebar-file-explorer">
        <GmailTreeView/>
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
              <summary className="sidebar-properties-accordion-head">Dynamic</summary>
              <Dynamic />
            </details>
            <details className="sidebar-properties-accordion">
              <summary className="sidebar-properties-accordion-head">Kinetic</summary>
              <Kinetic />
            </details>
            <details className="sidebar-properties-accordion">
              <summary className="sidebar-properties-accordion-head">Collision</summary>
              <Collision />
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidePanel
