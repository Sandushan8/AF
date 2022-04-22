import React from 'react'
import { SideBarCont,
    Icon, 
    CloseIcon,
    SideBarW,
    SBMenu,
    SBLink,
    SBRoute,
    SBtnWrap } from './SideBarEle'
const SideBar = ({isOpen,toggle}) => {
  return (
    <>
    <SideBarCont isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarW>
            <SBMenu>
                <SBLink to="/" onClick={toggle}> Manage Users</SBLink>
                <SBLink to="/" onClick={toggle}> Upload Documents</SBLink>
                <SBLink to="/" onClick={toggle}>Add New Submission </SBLink>
                <SBLink to="/" onClick={toggle}>Manage Groups </SBLink>
                <SBLink to="/" onClick={toggle}>Add New Marking schemes</SBLink>
            </SBMenu>
    <SBtnWrap>
        <SBRoute to='/'>Sign out</SBRoute>
    </SBtnWrap> 
        </SideBarW>
    </SideBarCont>
    
    </>
  )
}

export default SideBar