import styled from "styled-components";

const StyledHeader = styled.header`
display: block;
`;

const Nav = styled.nav`
background: #2f333e;
padding-top: 15px;
padding-bottom: 15px;
color: #fff;
position: relative;
border-radius: 0;
-webkit-box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
z-index: 10;
padding-left: 0;
padding-right: 0;
& a{
    color: inherit;
}`;

const SearchBox = styled.div`
width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    background: #fff;
    z-index: 12;
    border-radius: 0;
    display: none;`;

const ContainerFluid = styled.div`
width: 100%;
`;

export {
    StyledHeader,
    Nav,
    SearchBox,
    ContainerFluid
}