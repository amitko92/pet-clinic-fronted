import React, { useState, useReducer,useContext } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { LoginContext } from '../../LoginContext';
import { clientReducer } from '../../reducers/client/ClientReducer';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';
import { toDayStrInputValue } from '../../logic/date and time/date';


export const useClientData = (clientId) => {

    let initData = {
        isNewClient:false,
        hasModified: false,
        id: {value:clientId, isValid:false, message:'', isRequired:false},
        fName: {value:'', isValid:false, message:'field is required',isRequired:true},
        lName: {value:'', isValid:false, message:'field is required',isRequired:true},
        dateOfBirth: {value:'', isValid:false, message:'field is required',isRequired:true},
        registrationDate: {value:'', isValid:false, message:'field is required',isRequired:true},
        city: {value:'', isValid:false, message:'field is required',isRequired:true},
        street: {value:'', isValid:false, message:'field is required',isRequired:true},
        house: {value:'', isValid:false, message:'field is required',isRequired:true},
        apartment: {value:'', isValid:false, message:'field is required',isRequired:true},
    }

    if(clientId == -1){
        initData.registrationDate.isValid = true;
        initData.registrationDate.message = '';
        initData.registrationDate.value = toDayStrInputValue()
    }

    const [formState, formDispatch] = useReducer(clientReducer, initData);

    return {formState, formDispatch};
}