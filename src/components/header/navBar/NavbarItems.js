import { useState } from "react";
import HeaderDetailsUser from "../HeaderDetailsUser";
import DropDownDivider from "./DropDown/DropDownDivider";
import DropDownInnerItem from "./DropDown/DropDownInnerItem";
import DropDownItem from "./DropDown/DropDownItem";
import NavbarItem from "./NavbarItem";

function NavbarItems(props){

    const [activeTab, setActiveTab] = useState('Dashboard');

    const isShowMenu = props.isShowMenu;
    let classes = 'collapse navbar-collapse';

    if(isShowMenu){

        classes += ' show';
    }

    return (
        <div className={classes} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavbarItem 
                activeTab={activeTab}
                setActiveTab={setActiveTab} 
                name={'Dashboard'} 
                to={'/dashboard'}/>
                <DropDownItem name={'Clients'}>
                    <DropDownInnerItem 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    superName={'Clients'} 
                    name={'AddNewClient'} 
                    to={`/viewClient/${-1}`}/>
                    <DropDownInnerItem
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab}
                    superName={'Clients'} 
                    name={'ViewClientsList'} 
                    to={'/viewClientsList'}/>

                    <DropDownDivider />

                    <DropDownInnerItem 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    superName={'Clients'} 
                    name={'ViewAnimalsList'} 
                    to={'/viewAnimalsList'}/>
                </DropDownItem>
                <DropDownItem name={'Records'}>
                    <DropDownInnerItem 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    superName={'Records'} 
                    name={'Money'} 
                    to={'/dashboard'}/>
                    <DropDownInnerItem 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    superName={'Records'} 
                    name={'Money'} 
                    to={'/dashboard'}/>

                    <DropDownDivider />

                    <DropDownInnerItem 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    superName={'Records'} 
                    name={'Money'} 
                    to={'/dashboard'}/>
                </DropDownItem>
            </ul>
            <div className="d-flex">
                <HeaderDetailsUser />
            </div>
        </div>
    );
}

export default NavbarItems;