import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/about' activeStyle>
            ABOUT
          </NavLink>
          <NavLink to='/blog' activeStyle>
            BLOG
          </NavLink>
          <NavLink to='/skills' activeStyle>
            SKILLS
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
 gr

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
 `;
  
export default Navbar;
