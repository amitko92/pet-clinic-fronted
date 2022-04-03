import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../sidebar.module.css';

const SideNavbarInnerItem = (props) => {

    let classes = Style.sideNavbarInnerItem;

    const handleOnClick = () =>{

        props.setActiveTab(props.to);
    }

    if(props.activeTab === props.to){
        
        classes = Style.activeTab;
    }

    return (
        <div className={classes} onClick={handleOnClick}>
            <Link className={Style.sideNavbarLink} to={props.to}>{props.title}</Link>
        </div>
    );
}
 
export default SideNavbarInnerItem;