import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,
  NavBarCont,
  NavL, 
  MobI, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink} from './NavBarEle'

const NavBarAd = ({toggle}) => {
  return (
    <>
        <Nav>
        <NavBarCont>
          <NavL to='/'>
            ADMIN
          </NavL>
          <MobI onClick={toggle}>
            <FaBars />
          </MobI>
          
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Manage Users</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Upload Documents</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>New Submission</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Manage Groups</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>New Marking schemes</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signout">Sign Out</NavBtnLink>
          </NavBtn>
        </NavBarCont>
        </Nav>
    </>
  )
}
//npm install --save styled-components
//npm install react-icons --save
//npm install react-scroll
export default NavBarAd