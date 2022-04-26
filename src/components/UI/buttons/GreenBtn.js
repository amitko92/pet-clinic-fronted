import { useSyncExternalStore } from 'react';
import Style from './buttons.module.css';

function GreenBtn(props){

    const name = props.name;
    const handleClick = props.handleClick;

    const classes = Style.btn + ' ' + Style.greenBtn;

    return (
        <button className={classes} onClick={handleClick}>{name}</button>
    );
}

GreenBtn.defaultProps = {
    name: 'btn',
    handleClick: () => {console.log('DEFUAL handleClick')}
}

export default GreenBtn;