import { Link } from "react-router-dom";

function DropDownInnerItem(props){
    const name = props.name; 
    const to = props.to;
    const superName = props.superName;
    const activeTab = props.activeTab;

    let classes = 'nav-link';

    if(activeTab === name){

        classes += ' active'; 
    }

    return (
        <li onClick={() => {props.setActiveTab(superName)}}>
            <Link className={classes} to={to}>{name}</Link>
        </li>
    );
}


DropDownInnerItem.defaultProps = {
    name: 'NavbarItem',
    to:'#',
}


export default DropDownInnerItem;