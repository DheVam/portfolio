import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/blog' activeStyle>
            Blog
          </NavLink>
          <NavLink to='/skills' activeStyle>
            Skills
          </NavLink>
         </NavMenu>
       </Nav>
    </>
  );
};


 const Nav = styled.nav`
  background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  `;
  
 const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: None;
  font-family: robotoitalic;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap; 
 `;
  
export default Navbar;
