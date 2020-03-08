import React, { Component } from "react";
import {
    StyledHeader,
    Nav,
    SearchBox,
    ContainerFluid
} from '../../Style/header.style'
class Header extends Component {
  render = () => {
    return ( <div>
        <StyledHeader >
        <Nav className="navbar">
        
          <SearchBox className="search-box">
            <button className="dismiss"><i className="icon-close"></i></button>
            <form id="searchForm" action="#" role="search">
              <input type="search" placeholder="What are you looking for..." className="form-control"/>
            </form>
          </SearchBox>
          <ContainerFluid className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
            
              <div className="navbar-header">
                <a href="index.html" className="navbar-brand d-none d-sm-inline-block">
                  <div className="brand-text d-none d-lg-inline-block"><span>Bootstrap </span><strong>Dashboard</strong></div>
                  <div className="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div></a>
                <a id="toggle-btn" href="#" className="menu-btn active"><span></span><span></span><span></span></a>
              </div>
          
            </div>
          </ContainerFluid>
        </Nav>
      </StyledHeader>
   </div>
    );
  };
}

export default Header;
