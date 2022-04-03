import React, { useContext } from 'react';
import Style from './topNavbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import HeaderDetailsUser from './HeaderDetailsUser';
import { ProjectDetailsContext } from '../../contexts/ProjectDetailsContext';


function Header(props) {

    const {projectDetails} = useContext(ProjectDetailsContext);

    const onClickHanddle = () =>{
        //alert('you click header');
        props.chengeSidebarState();
    }

    return (
        <header className={Style.topNavbar}>
            
            <GiHamburgerMenu className={Style.hamburgerMenu} onClick={onClickHanddle}/>
 
            <div className={Style.navBox}>
                <div className={Style.navbarBrandBox}>
                    <Link className={Style.navbarBrand} to="/dashboard">PET CLINIC</Link> 
                </div>
                <span className={Style.navbarBrand}>{projectDetails.getName()}</span>
                <HeaderDetailsUser />
            </div>
        </header>
    );
}

export default Header;