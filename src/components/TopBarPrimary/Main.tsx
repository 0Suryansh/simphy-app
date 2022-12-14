import React from "react";
import Icons from "./Icons";
import "./Main.css";
import DropDown from "./DropDown";
import { CONSTANTS } from "./constant";

function TopBarPrimary(): JSX.Element {
  return (
    <div className="wrapper-top-bar">
      <div className="left-container">
        <Icons data={CONSTANTS} />
      </div>
    </div>
  );
}

export default TopBarPrimary;
