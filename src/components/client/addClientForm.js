import { useState } from "react";
import InputGroup from "../UI/form/InputGroup";
import Style from './client.module.css';
import {CLIENT_FORM_ACTION} from '../../reducers/client/ClientReducer';

function AddClientForm(props){

    const formState = props.formState;
    const formDispatch = props.formDispatch;

    return (
        <div className={Style.addClientForm}>
            <InputGroup 
            tagName={'First Name'}
            inputId={'firstName'}
            inputName={'fName'}
            inputValue={formState.fName.value}
            isRequired={formState.fName.isRequired}
            message={'Required field'}
            isValid={formState.fName.isValid}
            handleChange={value => {

                const [isValid, message] = [true, ''] // function...

                formDispatch({
                    type:CLIENT_FORM_ACTION.UPDATE_FIELD,
                    payload:{
                        field:'fName',
                        value:value,
                        isValid:isValid,
                        message:message,
                        isRequired:formState.fName.isRequired
                    }
                });
            }}/>

            <InputGroup 
            tagName={'Last Name'}
            inputName={'lName'}
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