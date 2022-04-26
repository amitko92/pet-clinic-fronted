import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectDetailsContext } from '../../../contexts/ProjectDetailsContext';

function NavbarBrand(){

    const {projectDetails} = useContext(ProjectDetailsContext);

    return (
        <Link className="navbar-brand" to="/dashboard">
            PET CLINIC - {projectDetails.getName()}
        </Link>
    );
}

export default NavbarBrand;