import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectDetailsContext } from '../../../contexts/ProjectDetailsContext';
import ToggleBtn from "./ToggleBtn";
import NavbarItems from "./NavbarItems";
import NavbarBrand from "./NavbarBrand";

function Navbar(props){

    const [isShowMenu, setIsShowMenu] = useState(false);
    const {projectDetails} = useContext(ProjectDetailsContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavbarBrand /> 
                
                <ToggleBtn 
                handleClick={() => setIsShowMenu(!isShowMenu)} 
                isShowMenu={isShowMenu}/>

                <NavbarItems isShowMenu={isShowMenu} />
            </div>
        </nav>
    );
}


Navbar.defaultProps = {

}


export default Navbar;