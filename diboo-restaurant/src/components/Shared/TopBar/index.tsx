import React, { Component, useContext } from "react";
import { Context, saveState } from "../../../utilities/useAuth";
import { history } from "../../../utilities/history";

interface Props {
  fireCollapse: Function;
}
const TopBar: React.FunctionComponent = () => {
  const { contextState, setContext } = useContext(Context);
  const logout = () => {
    const v = {
      contextState: {
        isLogged: false,
        user: {
          id: "",
          role: "",
        },
      },
      setContext,
    };
    setContext(v);
    saveState(v);
    // history.push("login");
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <a href="index-2.html" className="logo"></a>
      </div>

      <nav className="navbar-custom">
        <ul className="navbar-right list-inline float-right mb-0">
          <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="../assets/images/flags/us_flag.jpg"
                className="mr-2"
                height="12"
                alt=""
              />{" "}
              English <span className="mdi mdi-chevron-down"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right language-switch">
              <a className="dropdown-item" href="#">
                <img
                  src="../assets/images/flags/french_flag.jpg"
                  alt=""
                  height="16"
                />
                <span> French </span>
              </a>
            </div>
          </li>

          <li className="dropdown notification-list list-inline-item">
            <div className="dropdown notification-list nav-pro-img">
              <a
                className="dropdown-toggle nav-link arrow-none nav-user"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="../assets/images/admin-icon.png"
                  alt="user"
                  className="rounded-circle"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                <a className="dropdown-item d-block" href="#">
                  <span className="badge badge-success float-right">11</span>
                  <i className="mdi mdi-settings"></i> Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-lock-open-outline"></i> Change password
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" onClick={logout}>
                  <i className="mdi mdi-power text-danger"></i> Logout
                </a>
              </div>
            </div>
          </li>
        </ul>

        <ul className="list-inline menu-left mb-0">
          <li className="float-left">
            <button className="button-menu-mobile open-left waves-effect">
              <i className="mdi mdi-menu"></i>
            </button>
          </li>
          <li className="float-left">
            <a href="#">
              <i
                className="fas fa-shopping-cart"
                style={{
                  marginLeft: "50px",
                  marginTop: "30%",
                  color: "blue",
                  fontSize: "25px",
                }}
              ></i>
            </a>
            <a></a>
          </li>
          <a></a>
          <li className="float-left">
            <a></a>
            <a href="#">
              <i
                className="fas fa-utensils"
                style={{
                  marginLeft: "50px",
                  marginTop: "30%",
                  color: "blue",
                  fontSize: "25px",
                }}
              ></i>
            </a>
            <a></a>
          </li>
          <a></a>
          <li className="float-left">
            <a></a>
            <a href="#">
              <i
                className="fas fa-shipping-fast"
                style={{
                  marginLeft: "50px",
                  marginTop: "30%",
                  color: "blue",
                  fontSize: "25px",
                }}
              ></i>
            </a>
            <a></a>
          </li>
          <a>
            <li className="waves-effect">
              <div
                style={{
                  marginLeft: "50px",
                  marginTop: "6%",
                  color: "blue",
                  fontSize: "25px",
                }}
              >
                Welcome Wok To Go
              </div>
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

/*const mapStateToProps = ({ login }: ApplicationState) => ({
  userInfo: login.userInfo,
  isLoggedIn: login.isLoggedIn,
  error: login.error,
  isLoading: login.isLoading
});*/

//const mapActionsToProps = { login };

//export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
export default TopBar;
