import { useState } from "react";
import InputGroup from "../UI/form/InputGroup";
import Style from './client.module.css';
import {CLIENT_FORM_ACTION} from '../../reducers/client/ClientReducer';
import { isOnlyEngNotEmpty } from "../../logic/validate/client validators/addClientValidator";

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
            message={formState.fName.message}
            isValid={formState.fName.isValid}
            handleChange={value => {

                const [isValid, message] = isOnlyEngNotEmpty(value);

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
            inputValue={formState.lName.value}
            isRequired={true}
            message={formState.lName.message}
            isValid={false}
            handleChange={value => {

                const [isValid, message] = [true, ''] // function...

                formDispatch({
                    type:CLIENT_FORM_ACTION.UPDATE_FIELD,
                    payload:{
                        field:'lName',
                        value:value,
                        isValid:isValid,
                        message:message,
                        isRequired:formState.lName.isRequired
                    }
                });
            }}/>

            <button>Save Client</button>
        </div>
    );
}

AddClientForm.defaultProps = {
    tagName: ''
}

export default AddClientForm;