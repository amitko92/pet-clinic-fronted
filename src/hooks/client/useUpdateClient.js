import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { LoginContext } from '../../LoginContext';
import { CLIENT_FORM_ACTION } from '../../reducers/client/ClientReducer';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';

export const useUpdateClient = (formState) => {
    const {setPageState} = useContext(PageStateContext);

    const handleError = (error) => {
        console.log('error ' + error);
        
        setPageState({
            type:PAGE_STATE_ACTION.SET_ERROR_MESSAGE,
            payload:{
                message:error.message
            }
        });

        console.log(error.message);
    }

    const handleSuccess = (response) => {
        const data = response.data;
        
        if(data.status === 1){
            console.log('response ' + JSON.stringify(data));
            const owner = data.owner;

            setPageState({
                type:PAGE_STATE_ACTION.SET_SUCCESS_MESSAGE,
                payload:{
                    message:'client add'
                }
            });
        }else{

            let message = `failed to add client with id ${formState.id}`;

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
        const url = '/addOwner';
 
        let formData = new FormData(); // Currently empty

        for (let x in formState) {
            
            if(x === 'id' || x === 'isNewClient' || x === 'hasModified'){
                continue;
            }

            formData.append(x, formState[x].value);
         }

        axios.post(url, formData)
        .then(response => {
            
            handleSuccess(response);
        })
        .catch(error => {

            handleError(error);
        })
        .finally();
    }

    return addClient;
}