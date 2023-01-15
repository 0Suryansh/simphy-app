import React from "react";
import Icons from "./Icons";
import "./Main.css";
import { CONSTANTS } from "./constants";

function TopBarPrimary() {
  
  return (
    <div className="wrapper-top-bar">
      <div className="left-container">
        <Icons data={CONSTANTS} />
      </div>
    </div>
  );
}

export default TopBarPrimary;
