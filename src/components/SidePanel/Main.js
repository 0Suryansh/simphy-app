import React from "react";
import "./Main.css";
import Display from "./Properties/Display";
import General from "./Properties/General";
import Style from "./Properties/Style";
import Preferences from "./Properties/Preferences";
import TreeView from "./TreeView/index";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/subtract.svg";

const SidePanel = () => {
  const [expanded, setExpanded] = React.useState([false, false, false, false]);

  const icons = React.useMemo(
    () => [
      {
        icon: Plus,
        alt: "Plus-icon",
      },
      {
        icon: Minus,
        alt: "Minus-icon",
      },
    ],
    []
  );

  return (
    <div className="sidebar">
      <div className="sidebar-file-explorer">
        <TreeView />
      </div>
      <div className="sidebar-properties">
        <div>
          <div className="sidebar-properties-heading">
            <span>(Property)</span>
            <span>(Value)</span>
          </div>
          <div className="sidebar-properties-body">
            <details className="sidebar-properties-accordion">
              <summary
                className="sidebar-properties-accordion-head"
                onClick={() => {
                  setExpanded(
                    [!expanded[0], expanded[1], expanded[2], expanded[3]]
                  );
                }}
              >
                {expanded[0] === false ? (
                  <img
                    src={icons[0].icon}
                    alt="right-arrow"
                    className="hero-icon arrow-icon"
                  />
                ) : (
                  <img
                    src={icons[1].icon}
                    alt="drop-dowm"
                    className="hero-icon arrow-icon"
                  />
                )}
                General
              </summary>
              <General />
            </details>

            {/* Display */}
            <details className="sidebar-properties-accordion">
              <summary
                className="sidebar-properties-accordion-head"
                onClick={() => {
                  setExpanded(
                    [expanded[0], !expanded[1], expanded[2], expanded[3]]
                  );
                }}
              >
                {expanded[1] === false ? (
                  <img
                    src={icons[0].icon}
                    alt="right-arrow"
                    className="hero-icon arrow-icon"
                  />
                ) : (
                  <img
                    src={icons[1].icon}
                    alt="drop-dowm"
                    className="hero-icon arrow-icon"
                  />
                )}{" "}
                Display
              </summary>
              <Display />
            </details>

            {/* Style */}
            <details className="sidebar-properties-accordion">
              <summary
                className="sidebar-properties-accordion-head"
                onClick={() => {
                  setExpanded(
                    [expanded[0], expanded[1], !expanded[2], expanded[3]]
                  );
                }}
              >
                {expanded[2] === false ? (
                  <img
                    src={icons[0].icon}
                    alt="right-arrow"
                    className="hero-icon arrow-icon"
                  />
                ) : (
                  <img
                    src={icons[1].icon}
                    alt="drop-dowm"
                    className="hero-icon arrow-icon"
                  />
                )}{" "}
                Style
              </summary>
              <Style />
            </details>

            {/* Preferences */}
            <details className="sidebar-properties-accordion">
              <summary
                className="sidebar-properties-accordion-head"
                onClick={() => {
                  setExpanded(
                    [expanded[0], expanded[1], expanded[2], !expanded[3]]
                  );
                }}
              >
                {expanded[3] === false ? (
                  <img
                    src={icons[0].icon}
                    alt="right-arrow"
                    className="hero-icon arrow-icon"
                  />
                ) : (
                  <img
                    src={icons[1].icon}
                    alt="drop-dowm"
                    className="hero-icon arrow-icon"
                  />
                )}{" "}
                Preferences
              </summary>
              <Preferences />
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
