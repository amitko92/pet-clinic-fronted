import React, { useState, useReducer,useContext } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { LoginContext } from '../../LoginContext';
import { clientReducer } from '../../reducers/client/ClientReducer';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';

export const useClientData = (clientId) => {

    const {setPageState} = useContext(PageStateContext);

    const [formState, formDispatch] = useReducer(clientReducer, {
        isNewClient:false,
        hasModified: false,
        id: {value:clientId, isValid:false, message:'', isRequired:false},
        fName: {value:'', isValid:false, message:'',isRequired:true},
        lName: {value:'', isValid:false, message:'',isRequired:true},
        datOfBirth: {value:'', isValid:false, message:'',isRequired:true},
        registrationDate: {value:'', isValid:false, message:'',isRequired:true},
        city: {value:'', isValid:false, message:'',isRequired:true},
        street: {value:'', isValid:false, message:'',isRequired:true},
        house: {value:'', isValid:false, message:'',isRequired:true},
        apartment: {value:'', isValid:false, message:'',isRequired:true},
    });

    return {formState, formDispatch};
}