import { useState } from "react";

function DropDownItem(props){

    const [isOpen, setIsOpen] = useState(false);
    const activeTab = props.activeTab;
    const name = props.name;
    let classesToggle = 'nav-link dropdown-toggle';
    let classesUl = 'dropdown-menu ';
    let classesLi = 'nav-item dropdown';
    let ariaExpanded = false;

    if(activeTab == props.name){

        classesLi += ' active'; 
    }

    if(isOpen){

        classesToggle += ' show';
        classesUl += ' show';
        ariaExpanded = true;
    }

    return (
        <li className={classesLi} onClick={() => setIsOpen(!isOpen)}>
            <a 
            className={classesToggle} 
            href="#" 
            id="navbarDropdown" 
            role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded={ariaExpanded}>
                {name}
            </a>
            <ul className={classesUl} aria-labelledby="navbarDropdown">
                {props.children}
            </ul>
        </li>
    );
}


DropDownItem.defaultProps = {
    name:'',
    activeTab:''
}


export default DropDownItem;