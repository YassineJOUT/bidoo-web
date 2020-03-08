import React, { Component } from "react";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";
import {
  MenuContainer,
  Avatar,
  Heading,
  UnstyledList,
  Li,
  A
} from "../../Style/menu.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";
class Menu extends Component {
  render = () => {
     

    return ( <div>
      <MenuContainer style={{ width: "16rem" }}>
       <div className="sidebar-header d-flex align-items-center" style={{padding: '30px 15px'}}>
         <Avatar>
            <img src="https://d19m59y37dris4.cloudfront.net/admin/1-4-5/img/avatar-1.jpg" alt="..." className="img-fluid rounded-circle" />
         </Avatar>
         <div className="title" style={{ marginLeft: '10px',marginTop: '15px'}}>
              <h4 className='text-dark'>Mark Stephen</h4>
              <p style={{    fontSize: '0.9em',
    fontWeight: 200,
    marginBottom: 0,
    color: '#aaa'}}>Web Designer</p>
        </div>
        </div>   
        <Heading >Main</Heading>
        <UnstyledList className="list-unstyled">
            <Li className="active"><A href="index.html"> <i className="icon-home"></i>Home </A></Li>
            <Li><A href="tables.html"> <i className="icon-grid"></i>Tables </A></Li>
            <Li><A href="charts.html"> <i className="fa fa-bar-chart"></i>Charts </A></Li>
            <Li><A href="forms.html"> <i className="icon-padnote"></i>Forms </A></Li>
            <Li><A href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows"></i>Example dropdown </A>
              <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                <Li><A href="#">Page</A></Li>
                <Li><A href="#">Page</A></Li>
                <Li><A href="#">Page</A></Li>
              </ul>
            </Li>
            <Li><A href="login.html"> <i className="icon-interface-windows"></i>Login page </A></Li>
          </UnstyledList>
      </MenuContainer>
      </div>
    );
  };
}

export default Menu;
