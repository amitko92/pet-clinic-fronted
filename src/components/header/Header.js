import React from 'react';
import Style from './topNavbar.module.css';
import Navbar from './navBar/Navbar';

function Header() {

    return (
        <header className={Style.topNavbar}>
            <Navbar />
        </header>
    );
}

export default Header;