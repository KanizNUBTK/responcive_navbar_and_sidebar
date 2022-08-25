import React, { useState } from 'react';
import dynamic from "next/dynamic";
import Sidebar from '../shared/sidebar/sidebar';
import Backdrop from '../shared/sidebar/backdrop';
const Navbar = dynamic(() => { return import('../shared/navbar/navbar'); },
    { ssr: false }
);;

const Menu = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleOpenSidebar = () => {
        setSidebarOpen(true);
    }
    const handleCloseSideBar = () => {
        setSidebarOpen(false)
    }

     let sidebar;
    // let backdrop;
    if (sidebarOpen) {
        sidebar = <Sidebar   handleCloseSideBar={handleCloseSideBar}/>;
        // backdrop = <Backdrop handleCloseSideBar={handleCloseSideBar}/>
    }

    return (
        <div className='h-[100%]'>
            <Navbar handleOpenSidebar={handleOpenSidebar} />
            {sidebar}          
            {/* <Sidebar show={sidebarOpen}  handleCloseSideBar={handleCloseSideBar}/> */}
            {/* {backdrop} */}
            <Backdrop show={sidebarOpen} handleCloseSideBar={handleCloseSideBar}/>

        </div>
    );
};

export default Menu;