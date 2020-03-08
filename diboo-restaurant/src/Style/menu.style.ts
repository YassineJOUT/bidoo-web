import styled from "styled-components";

const MenuHeader = styled.div`
background: #333547;
float: left;
text-align: center;
height: 70px;
position: relative;
width: 240px;
z-index: 1;
`;
const MenuContainer = styled.div`
background: #fff;
min-width: 250px;
max-width: 250px;
color: #686a76;
-webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
z-index: 9;
height:796px;

`;
const Avatar = styled.div`
width: 55px;
height: 55px;
`;
const MenuItem = styled.div`
  color: white;
  font-family: "Lato";
  padding: 8px;
`;
const MenuItemIcon = styled.span`
  color: white;
  padding: 8px;
`;
const UnstyledList = styled.ul`
    padding: 15px 0;
    list-style: none;
`;

const A = styled.a`
    text-decoration: none;
    padding: 10px 15px;
    display: block;
    font-weight: 300;
    border-left: 4px solid transparent;
   `;

const Li = styled.li`
display: list-item;
text-align: -webkit-match-parent;

 ${MenuContainer} ${UnstyledList} &.active>${A} {
    background: #796AEE;
    color: #fff;
    border-left: 4px solid #3b25e6;
};
&:hover:not(.active){
    background: #796AEE;
    color: #fff;
    border: none;
    border-left: 4px solid #3b25e6;
}
`;


const Heading = styled.span`
text-transform: uppercase;
font-weight: 400;
margin-left: 20px;
color: #ccc;
font-size: 0.8em;
`;

const MenuItemText = styled.span`
  color: #b4c9de !important;
  background-color: #383b4e;

  font-family: "Lato";
  padding: 8px;
`;


export {
  MenuContainer,
  MenuItem,
  MenuItemText,
  MenuItemIcon,
  MenuHeader,
  Avatar,
  Heading,
  UnstyledList,
  Li,
  A
};
