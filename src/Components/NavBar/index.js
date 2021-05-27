import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars/>
        <NavMenu>
          <NavLink to='/' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/about' activeStyle>
            ABOUT
          </NavLink>
          <NavLink to='/skills' activeStyle>
            SKILLS
          </NavLink>
          <NavLink to='/blog' activeStyle>
            BLOG
          </NavLink>
          <NavLink to='/Contact' activeStyle>
            CONTACT
          </NavLink>
          </NavMenu>
       </Nav>
    </>
  );
};


 const Nav = styled.nav`
 background:#3b3838;
 cursor: default;
 width: auto;
 height: 44px;
 display: flex;
 `;
 const Bars = styled(FaBars)`
 display: none;
 color: #808080;
 @media screen and (max-width: 768px) {
 display: block;
 top: -12px;
 right: 0;
 transform: translate(-100%, 75%);
 font-size: 1.8rem;
 cursor: pointer;
 position: absolute;
  }
`;
 const NavLink = styled(Link)`
  color:#d6d4d4 ;
  display: flex;
  align-items: center;
  text-decoration: None;
  font-family: robotobold;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffffff;
  }
`;
  
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  white-space: nowrap; 
  grid-gap: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
 `;
    
export default Navbar;
