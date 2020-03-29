import React, { Component } from "react";
import { history } from '../../../utilities/history'
import { Router,Route,Link } from 'react-router-dom';
import MetisMenu from 'react-metismenu';
class SideBar extends Component {
 
    //history.push("forgotpassword")
    
  render = () => {
    const content=[
        {
            icon: 'ion ion-md-speedometer',
            label: 'Dashboard',
            to: '/dashboard',
        },
        {
            icon: 'ion ion-md-pin',
            label: 'Restaurant Map View',
            to: '/map-view',
        },
        {
            icon: 'ion ion-md-home',
            label: 'Settings',
            content: [
                {
                   
                    label: 'Site settings',
                    to: '/site-settings',
                },
                {
                   
                    label: 'Commission settings',
                    to: '/commission-settings',
                },
            ],
        },
        {
            icon: 'ion ion-md-business',
            label: 'Manage restaurants',
            content: [
                {
                    label: 'Add restaurant',
                    to: '/add-restaurant',
                },
                {
                    label: 'Manage restaurant',
                    to: '/manage-restaurants',
                },
                {
                    label: 'Orders Report',
                    to: '/restaurant-report',
                },
            ],
        }, 
        {
            icon: 'ion ion-md-business',
            label: 'Menu management',
            content: [
                {
                    label: 'Kitchen',
                    to: '/kitchen',
                },
                {
                    label: 'Menu categories',
                    to: '/menu-category',
                },
                {
                    label: 'Category items',
                    to: '/tems',
                },
            ],
        }, 
        {
            icon: 'ion ion-md-restaurant',
            label: 'Manage customers',
            content: [
                {
                   
                    label: 'Customers',
                    to: '/customer',
                },
                {
                   
                    label: 'Track payment',
                    to: '/track-payment',
                },
            ],
        },
        {
            icon: 'ion ion-md-cart',
            label: 'Manage orders',
            content: [
                {
                   
                    label: 'Customer orders',
                    to: '/orders',
                },
                {
                   
                    label: 'Guest orders',
                    to: '/orders-guest',
                },
            ],
        }, 
    ];
   
    return (
        <div className="left side-menu">
        <div className="slimScrollDiv " ><div className="slimscroll-menu mm-show" id="remove-scroll" >

        
            <div id="sidebar-menu" className="mm-active">
              
            <MetisMenu className="metismenu"
                clasNameLink="metismenu-link"
                content={content} activeLinkFromLocation />
            </div>
           
            <div className="clearfix"></div>

        </div><div></div></div>
      

    </div>
    );
  };
}

/*const mapStateToProps = ({ login }: ApplicationState) => ({
  userInfo: login.userInfo,
  isLoggedIn: login.isLoggedIn,
  error: login.error,
  isLoading: login.isLoading
});*/

//const mapActionsToProps = { login };

//export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
export default SideBar;
