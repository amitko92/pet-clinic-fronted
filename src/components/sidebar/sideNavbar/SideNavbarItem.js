import React, {useState} from 'react';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import Style from '../sidebar.module.css';

const SideNavbarItem = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <div className={Style.sideNavbarItem} onClick={() => setIsOpen(!isOpen)}>
                <div className={Style.sideNavbarItemTitle}>
                    {props.title}
                </div>
                {isOpen ? <BiUpArrow className={Style.sideNavbarItemIcon}/> : <BiDownArrow className={Style.sideNavbarItemIcon}/>}
            </div>

            {isOpen && props.innertItems} 
        </React.Fragment>
    );
}
 
export default SideNavbarItem;