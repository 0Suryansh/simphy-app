import * as React from 'react';
import './DropDown.css';


const DropDown = ({ data, id, updateIcon }) => {
  return (
    <div className="dropdown" style={{ left: id === 0 ? "1rem" : id + "rem" }}>
      {data?.map((url) => (
        <div
          className="dropdown-menuItem"
          onClick={() => {
            const index = id / 3;
            updateIcon(index, url.icon, url.desc);
          }}
        >
          <img
            src={url.icon}
            alt="dropdown"
            className="dropdown-menuItem-icon"
          />
          <p className="dropdown-menuItem-description">{url.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
