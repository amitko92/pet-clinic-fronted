import React, { useContext } from 'react';
import LoggedinUser from '../../models/LoggedinUser';
import {LoginContext} from '../../LoginContext';
import Style from './topNavbar.module.css';

function HeaderDetailsUser() {
    const {setIsLoggedIn, setLoggedInUser, loggedInUser} = useContext(LoginContext);

    const onClickHanddle = () =>{
        setIsLoggedIn(false);
        setLoggedInUser(new LoggedinUser());
    }

    return (
        <div className={Style.HeaderDetailsUserBox}>
            <span>{loggedInUser.getFullName()}</span> | <span className={Style.logoutNav} onClick={onClickHanddle}>logout</span>
        </div>
    );
}

export default HeaderDetailsUser;