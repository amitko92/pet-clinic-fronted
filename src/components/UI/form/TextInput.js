import React, { useState } from 'react';
import Style from './inputs.module.css';

function TextInput(props) {

    const hendleOnChange = (event) => {
        props.setValue(event.currentTarget.value);
    }
    
    return (
        <div>
            <label htmlFor={props.id}>{props.tagName}</label>
            <input className={Style.input} 
                type='text' 
                value={props.value}
                name={props.name}
                id={props.id}
                onChange={hendleOnChange}/>
        </div>
    );
}

export default TextInput;