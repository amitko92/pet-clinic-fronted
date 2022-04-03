import React, { useState, useReducer,useContext } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { LoginContext } from '../../LoginContext';

export const ACTION = {
    UPDATE_CLIENT: "UPDATE_CLIENT",
    UPDATE_FORM_STATE: "UPDATE_FORM_STATE"
}

function reducer(state, action){
    switch (action.type){
        case ACTION.UPDATE_CLIENT:
            return {...state, [action.payload.field]:action.payload.val};
        case ACTION.UPDATE_FORM_STATE:
            return { ...state, isUpdated:true};
        default:
            return state;
    }
}

export const useGetClient = (clientId) => {

    const [state, dispatch] = useReducer(reducer, {
        isUpdated: false,
        id: clientId,
        first_name: '',
        last_name: '',
        date_of_birth: '',
        registration_date: '',
        city: '',
        street: '',
        house_number: '',
        apartment: '',
        project_serial_number: -1
    });

    const getClient = () =>{

    }

    return {state, dispatch, getClient};
}