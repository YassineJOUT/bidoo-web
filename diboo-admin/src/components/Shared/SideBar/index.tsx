import React from "react";
import MetisMenu from "react-metismenu";
import { menuContent } from "../../../utilities/Consts";
import { useMediaQuery } from "react-responsive";
interface Props {
  collapse: boolean;
}

const SideBar: React.FunctionComponent<Props> = () => {
  //history.push("forgotpassword")
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  console.log("isTabletOrMobile");
  console.log(isTabletOrMobile);
  return (
    <div className={isTabletOrMobile ? "left side-menu d-none" : "left side-menu" }>
      <div className="slimScrollDiv">
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

export default SideBar;
