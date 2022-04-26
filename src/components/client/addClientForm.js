import { useState } from "react";
import InputGroup from "../UI/form/InputGroup";
import Style from './client.module.css';
import {CLIENT_FORM_ACTION} from '../../reducers/client/ClientReducer';
import { isNotEmpty, isOnlyEngNotEmpty } from "../../logic/validate/client validators/addClientValidator";
import InputGroupRequired from "../UI/form/InputGroupRequired";
import { useUpdateClient } from "../../hooks/client/useUpdateClient";

function AddClientForm(props){

    const formState = props.formState;
    const formDispatch = props.formDispatch;
    const addClient = useUpdateClient(formState);

    const handleChange = (validationFunc, fieldName, value) => {

        const [isValid, message] = validationFunc(value);
        //console.log(``);
        formDispatch({
            type:CLIENT_FORM_ACTION.UPDATE_FIELD,
            payload:{
                field:fieldName,
                value:value,
                isValid:isValid,
                message:message,
                isRequired:formState[fieldName].isRequired
            }
        });
    }
    
    const handleSubmit = e => {
        e.preventDefualt();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-4">
                    <InputGroupRequired 
                    tagName={'First Name'}
                    inputName={'fName'}
                    formData={formState.fName}
                    handleChange={value => {
                        handleChange(isOnlyEngNotEmpty,'fName', value);
                    }}/>
                </div>
                <div className="col-4">
                    <InputGroupRequired 
                    tagName={'Last Name'}
                    inputName={'lName'}
                    formData={formState.lName}
                    handleChange={value => {
                        handleChange(isOnlyEngNotEmpty,'lName', value);
                    }}/>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
 
                    <InputGroupRequired 
                    tagName={'Date Of Birth'}
                    inputName={'dateOfBirth'}
                    formData={formState.dateOfBirth}
                    type={'date'}
                    handleChange={value => {
                        handleChange(isNotEmpty,'dateOfBirth', value);
                    }}/>
                </div>
                <div className="col-4">
                    <InputGroupRequired 
                    tagName={'Registration Date'}
                    inputName={'registrationDate'}
                    formData={formState.registrationDate}
                    type={'date'}
                    handleChange={value => {
                        handleChange(isNotEmpty,'registrationDate', value);
                    }}/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <InputGroupRequired 
                    tagName={'City'}
                    inputName={'city'}
                    formData={formState.city}
                    handleChange={value => {
                        handleChange(isOnlyEngNotEmpty,'city', value);
                    }}/>
                </div>
                <div className="col-3">
                    <InputGroupRequired 
                    tagName={'Street'}
                    inputName={'street'}
                    formData={formState.street}
                    handleChange={value => {
                        handleChange(isOnlyEngNotEmpty,'street', value);
                    }}/>
                </div>
                <div className="col-2">
                <InputGroupRequired 
                    tagName={'House'}
                    inputName={'house'}
                    formData={formState.house}
                    handleChange={value => {
                        handleChange(isNotEmpty,'house', value);
                    }}/>
                </div>
                <div className="col-2">
                <InputGroupRequired 
                    tagName={'Apartment'}
                    inputName={'apartment'}
                    formData={formState.apartment}
                    handleChange={value => {
                        handleChange(isNotEmpty,'apartment', value);
                    }}/>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Save Client</button>
        </form>
    );
}

AddClientForm.defaultProps = {
    tagName: ''
}

export default AddClientForm;