function ToggleBtn(props){

    const isShowMenu = props.isShowMenu;
    let classes = 'navbar-toggler';
    let ariaExpanded = true;

    if(!isShowMenu){

        ariaExpanded = false;
        classes += ' collapsed';
    }

    return (
        <button 
        className={classes} 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded={ariaExpanded} 
        aria-label="Toggle navigation"
        onClick={props.handleClick}>
            <span className="navbar-toggler-icon"></span>
        </button>
    );
}
export default ToggleBtn;