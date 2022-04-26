import { useState } from "react";
import Style from './inputs.module.css';
import RedStar from "./RedStar";

function InputGroup(props){
    const [isFocus, setIsFocus] = useState(false);
    const [hasModified, setHasModified] = useState(false);

    let showError = !isFocus && hasModified && !props.isValid;
    let redStar = '';
    let errorDiv = ''
    let classes = 'form-control';

    if(props.isRequired){

        redStar = <RedStar />
    }
  
    if(showError){

        classes += ' is-invalid';
        errorDiv = <div className={'invalid-feedback'}>{props.message}</div>
    }

    const handleFocus = () => {

        setIsFocus(true);

        if(hasModified === false){
            
            setHasModified(true);
        }
    }

    return (
        <>

        {redStar}

        <label
        className={'form-label'}  
        htmlFor={props.inputId}>
            {props.tagName}
        </label>

        <input
        className={classes}
        type={props.type}
        value={props.inputValue}
        name={props.inputName}
        id={props.inputId} 
        required={props.isRequired}
        onChange={e => props.handleChange(e.currentTarget.value)}
        onFocus={handleFocus}
        onBlur={() => setIsFocus(false)}/>

        {errorDiv}
        </>
    );
}

InputGroup.defaultProps = {
    type:'text',
    tagName: '',
    inputValue: '',
    isRequired: false,
    inputName:'',
    inputId: '',
    message:'',
    isValid:true,
    handleChange: () => console.log("NO handleChange FOR INPUT")
}

export default InputGroup;