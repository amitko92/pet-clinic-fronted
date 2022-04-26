import { Link } from "react-router-dom";

function NavbarItem(props){

    const activeTab = props.activeTab;
    const name = props.name;
    const to = props.to;
    let classes = 'nav-link';

    if(activeTab == props.name){

        classes += ' active'; 
    }

    return (
        <li className="nav-item" onClick={() => props.setActiveTab(name)}>
            <Link 
            className={classes} 
            aria-current="page" 
            to={to}>
                {name}
            </Link>
        </li>
    );
}


NavbarItem.defaultProps = {
    name: 'NavbarItem',
    to:'#',
    activeTab: 'NavbarItem'
}


export default NavbarItem;