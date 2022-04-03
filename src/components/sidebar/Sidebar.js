import React, { useState } from 'react';
import Style from './sidebar.module.css';
import SideNavbar from './sideNavbar/SideNavbar';

function Sidebar() {

    return (
        <div className={Style.sidebar}>
            <SideNavbar />
        </div>
    );
}

export default Sidebar;