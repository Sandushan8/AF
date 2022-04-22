import React, {useState} from 'react'
import NavBarAd from '../../Components/Admin/NavBar';
import SideBar from '../../Components/Admin/SideBar';

const AdminHome = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle} />
    <NavBarAd toggle ={toggle} />
    </>
  );
};

export default AdminHome