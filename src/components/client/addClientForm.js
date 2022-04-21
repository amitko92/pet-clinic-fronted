import { useState } from "react";
import InputGroup from "../UI/form/InputGroup";
import Style from './client.module.css';

function AddClientForm(props){

    return (
        <div className={Style.addClientForm}>
            <InputGroup 
            tagName={'First Name'}
            inputId={'firstName'}
            inputValue={''}
            isRequired={true}
            message={'Required field'}
            isValid={false}/>

            <InputGroup 
            tagName={'Last Name'}
            inputId={'lastName'}
            inputValue={''}
            isRequired={true}
            message={'Required field'}
            isValid={false}/>           
            <button>Save Client</button>
        </div>
    );
}

AddClientForm.defaultProps = {
    tagName: ''
}

export default AddClientForm;