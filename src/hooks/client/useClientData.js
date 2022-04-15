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
        first_name: '',
        last_name: '',
        date_of_birth: '',
        registration_date: '',
        city: '',
        street: '',
        house_number: -1,
        apartment: -1,
    });

    const handleErrorFetch = (error) => {
        console.log('error ' + error)
        setPageState({
            type:PAGE_STATE_ACTION.SET_ERROR_MESSAGE,
            payload:{
                message:error.message
            }
        });

        console.log(error.message);
    }

    const handleSuccessAddClient = (response) => {
        const data = response.data;
        console.log('response ' + JSON.stringify(response));

        if(data.status === 1){

            setPageState({
                type:PAGE_STATE_ACTION.SET_SUCCESS_MESSAGE,
                payload:{
                    message:'client add'
                }
            });
        }else{

            let message = 'failed to add client';

            if(data.message !== undefined){
                message = data.message;
            }

            setPageState({
                type:PAGE_STATE_ACTION.SET_ERROR_MESSAGE,
                payload:{
                    message:message
                }
            });
        }

    }

    const addClient = () => {

        let url = '/addOwner?';
    }

    const updateClient = () => {
        let url = '/updateOwner?';
    }

    const getClient = () => {
        const url = '/owner' 
    }

    return {formState, formDispatch};
}