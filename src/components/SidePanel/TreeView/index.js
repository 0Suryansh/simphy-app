import React from "react";
import "./index.css";
import DropDownIcon from "../../../assets/chev-down.svg";
import RightArroW from "../../../assets/chevoron-right.svg";
import FolderPlus from "../../../assets/Folder-plus.svg";
import WorldIcon from "../../../assets/world.svg";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "../../../assets/delete-icon.svg";
import { selectedShape, deleteShape } from "../../../actions/index";
import FolderOpen from "../../../assets/folder-open.svg";
import HashIcon from "../../../assets/hash.svg";

const TreeView = () => {
  const allShape = useSelector((state) => state.app);
  const a = allShape.appWindow.shapesManager?.shapes.array;
  let dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState([false, false, false]);

  return (
    <div className="treeview-wrapper">
      <details>
        <summary
          className="folder"
          onClick={() => {
            setExpanded([!expanded[0], expanded[1], expanded[2]]);
          }}
        >
          {expanded[0] === false ? (
            <img
              src={RightArroW}
              alt="right-arrow"
              className="hero-icon arrow-icon"
            />
          ) : (
            <img
              src={DropDownIcon}
              alt="drop-dowm"
              className="hero-icon arrow-icon"
            />
          )}
          <img
            src={WorldIcon}
            alt="dropdowm"
            className="hero-icon folder-icon"
          />
          <span className="folder-name">World</span>
        </summary>
        <div className="files">
          <div className="file">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={FolderPlus}
                alt="dropdowm"
                className="hero-icon folder-icon"
              />
              <span className="folder-name">Bodies</span>
            </div>
          </div>
          <div className="file">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={FolderPlus}
                alt="dropdowm"
                className="hero-icon folder-icon"
              />
              <span className="folder-name">Joints</span>
            </div>
          </div>
          <div className="file">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={FolderPlus}
                alt="dropdowm"
                className="hero-icon folder-icon"
              />
              <span className="folder-name">Controllers</span>
            </div>
          </div>
          <div className="file">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={FolderPlus}
                alt="dropdowm"
                className="hero-icon folder-icon"
              />
              <span className="folder-name">Fields</span>
            </div>
          </div>
        </div>
      </details>
      <details>
        <summary className="folder">
          <img
            src={RightArroW}
            alt="dropdowm"
            className="hero-icon arrow-icon"
            style={{ visibility: "hidden" }}
          />
          <img
            src={FolderPlus}
            alt="dropdowm"
            className="hero-icon folder-icon"
          />
          <span className="folder-name">Widgets</span>
        </summary>
        <div className="files"></div>
      </details>
      {/* Resource Folder */}
      <details>
        <summary
          className="folder"
          onClick={() => {
            setExpanded([expanded[0], !expanded[1], expanded[2]]);
          }}
        >
          {expanded[1] === false ? (
            <img
              src={RightArroW}
              alt="right-arrow"
              className="hero-icon arrow-icon"
            />
          ) : (
            <img
              src={DropDownIcon}
              alt="drop-dowm"
              className="hero-icon arrow-icon"
            />
          )}
          {expanded[1] === false ? (
            <img
              src={FolderPlus}
              alt="folder-plus"
              className="hero-icon folder-icon"
            />
          ) : (
            <img
              src={FolderOpen}
              alt="folder-open"
              className="hero-icon folder-icon"
            />
          )}
          <span className="folder-name">Resources</span>
        </summary>
        <div className="files">
          <div className="file">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={FolderPlus}
                alt="dropdowm"
                className="hero-icon folder-icon"
              />
              <span className="folder-name">Animation</span>
            </div>
          </div>
          <div className="file">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={FolderPlus}
                alt="dropdowm"
                className="hero-icon folder-icon"
              />
              <span className="folder-name">Sound</span>
            </div>
          </div>
          <div className="file">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={FolderPlus}
                alt="dropdowm"
                className="hero-icon folder-icon"
              />
              <span className="folder-name">Fonts</span>
            </div>
          </div>
          <div className="file">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={FolderPlus}
                alt="dropdowm"
                className="hero-icon folder-icon"
              />
              <span className="folder-name">Files</span>
            </div>
          </div>
        </div>
      </details>
      {/* Geomtry folder */}
      <details open>
        <summary
          className="folder"
          onClick={() => {
            setExpanded([expanded[0], expanded[1], !expanded[2]]);
          }}
        >
          {expanded[2] === false ? (
            <img
              src={RightArroW}
              alt="right-arrow"
              className="hero-icon arrow-icon"
            />
          ) : (
            <img
              src={DropDownIcon}
              alt="drop-dowm"
              className="hero-icon arrow-icon"
            />
          )}
          {expanded[2] === false ? (
            <img
              src={FolderPlus}
              alt="folder-plus"
              className="hero-icon folder-icon"
            />
          ) : (
            <img
              src={FolderOpen}
              alt="folder-open"
              className="hero-icon folder-icon"
            />
          )}
          <span className="folder-name">Geometry</span>
        </summary>
        <div className="files">
          {a?.map((shape,index) => (
            <div
              className="file"
              onClick={() => {
                dispatch(selectedShape(shape));
                console.log("div");
              }}
              style={{
                backgroundColor:
                  allShape?.appWindow.shapesManager.selectedShape?.id ===
                  shape.id
                    ? "#0C8CE9"
                    : null,
              }}
              key={index}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={HashIcon}
                  alt="hash-icon"
                  className="hero-icon hash-icon"
                />
                <span>{shape.name}</span>
              </div>
              <img
                src={DeleteIcon}
                alt="delete-icon"
                className="hero-icon delete-icon"
                title="Remove"
                onClick={(event) => {
                  dispatch(deleteShape(shape));
                  console.log("img");
                  event.stopPropagation();
                }}
              />
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default TreeView;
