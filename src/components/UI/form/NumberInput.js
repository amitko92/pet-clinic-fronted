import React, { useState } from 'react';
import Style from './inputs.module.css';

function NumberInput(props){

    const hendleOnChange = (event) => {
        props.setValue(event.target.value);
    }

    return (
        <div>
            <label htmlFor={props.id}>{props.tagName}</label>
            <input className={Style.input} 
                type='number' 
                value={props.value} 
                onChange={hendleOnChange}
                />
        </div>
    );
}

export default NumberInput;