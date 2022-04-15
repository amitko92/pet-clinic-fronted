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
        isUpdated: false,
        id: clientId,
        fName: '',
        lName: '',
        datOfBirth: '',
        registrationDate: '',
        city: '',
        street: '',
        house: -1,
        apartment: -1,
    });

    return {formState, formDispatch};
}