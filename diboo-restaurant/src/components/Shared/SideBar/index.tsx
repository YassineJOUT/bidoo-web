import React, { Component } from "react";
import MetisMenu from "react-metismenu";

import { menuContent } from "../../../utilities/Consts";
interface Props {
  collapse: boolean
}

class SideBar extends Component<Props> {
  //history.push("forgotpassword")

  render = () => {
    
    
    return (
      <div className="left side-menu" >
        <div className="slimScrollDiv" >
          <div className="slimscroll-menu mm-show" id="remove-scroll">
            <div id="sidebar-menu" className="mm-active">
              <MetisMenu
                className="sidebar-menu"
                classNameContainer="metismenu"
                classNameItemActive="mm-active"
                classNameLinkActive="mm-active"
                content={menuContent}
                activeLinkFromLocation
              />
            </div>

            <div className="clearfix"></div>
          </div>
          <div></div>
        </div>
      </div>
    );
  };
}

export default SideBar;
