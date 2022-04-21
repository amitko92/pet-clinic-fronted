import { useState } from "react";
import Style from './inputs.module.css';
import RedStar from "./RedStar";

function InputGroup(props){
    const [isFocus, setIsFocus] = useState(false);
    const [hasModified, setHasModified] = useState(false);

    let showError = !isFocus && hasModified && !props.isValid;
    let redStar = '';
    let errorDiv = ''


    if(props.isRequired){

        redStar = <RedStar />
    }

    if(showError){

        errorDiv = <div className={Style.errorDiv}>{props.message}</div>
    }

    const handleChange = e => {

        props.handleChange(e.currentTarget.value);
    }

    const handleFocus = () => {

        setIsFocus(true);

        if(hasModified === false){

            setHasModified(true);
        }
    }

    return (
        <div className={Style.inputGroup}>

            {redStar}

            <label
            className={Style.label}  
            htmlFor={props.inputId}>
                {props.tagName}
            </label>

            <input
            className={Style.input} 
            value={props.inputValue} 
            id={props.inputId} 
            required={props.isRequired}
            onChange={e => props.handleChange(e.currentTarget.value)}
            onFocus={handleFocus}
            onBlur={() => setIsFocus(false)}/>

            {errorDiv}
        </div>
    );
}

InputGroup.defaultProps = {
    tagName: '',
    inputValue: '',
    isRequired: false,
    inputId: '',
    message:'',
    isValid:true,
    handleChange: () => console.log("NO handleChange FOR INPUT")
}

export default InputGroup;