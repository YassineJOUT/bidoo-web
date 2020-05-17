import React, { Component } from "react";
import MetisMenu from "react-metismenu";

interface Props {
  collapse: boolean
}

class SideBar extends Component<Props> {
  //history.push("forgotpassword")

  render = () => {
    const content = [
      {
        icon: "ion ion-md-speedometer",
        label: "Dashboard",
        to: "/dashboard"
      },
      {
        icon: "ion ion-md-pin",
        label: "Restaurant Map View",
        to: "/map-view"
      },
      {
        icon: "ion ion-md-home",
        label: "Home carousel",
        to: "/carousel"
      },
      {
        icon: "ion ion-ios-settings",
        label: "Settings",
        content: [
          {
            label: "Site settings",
            to: "/site-settings"
          },
          {
            label: "Commission settings",
            to: "/commission-settings"
          }
        ]
      },
      {
        icon: "ion ion-md-business",
        label: "Manage restaurants",
        content: [
          {
            label: "Add restaurant",
            to: "/add-restaurant"
          },
          {
            label: "Manage restaurant",
            to: "/manage-restaurants"
          },
          {
            label: "Orders Report",
            to: "/order-reports"
          }
        ]
      },
      {
        icon: "ion ion-md-business",
        label: "Menu management",
        content: [
          {
            label: "Kitchen",
            to: "/kitchen"
          },
          {
            label: "Menu categories",
            to: "/menu-categories"
          },
          {
            label: "Category items",
            to: "/category-items"
          }
        ]
      },
      {
        icon: "ion ion-md-restaurant",
        label: "Manage customers",
        content: [
          {
            label: "Customers",
            to: "/customer"
          },
          {
            label: "Track payment",
            to: "/track-payment"
          }
        ]
      },
      {
        icon: "ion ion-md-cart",
        label: "Manage orders",
        content: [
          {
            label: "Customer orders",
            to: "/orders"
          },
          {
            label: "Guest orders",
            to: "/orders-guest"
          }
        ]
      }
    ];
    
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
                content={content}
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
