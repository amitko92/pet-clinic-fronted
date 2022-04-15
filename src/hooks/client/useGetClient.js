import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { LoginContext } from '../../LoginContext';
import { CLIENT_FORM_ACTION } from '../../reducers/client/ClientReducer';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';

export const useGetClient = (clientId, formDispatch) => {
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

            formDispatch({
                type:CLIENT_FORM_ACTION.UPDATE_ALL_FIELD,
                payload:{
                    fName: owner.fName,
                    lName: owner.lName,
                    dateOfBirth: owner.dateOfBirth,
                    registrationDate: owner.registrationDate,
                    city: owner.city,
                    street: owner.street,
                    house: owner.house,
                    apartment: owner.apartment
                }
            })

            setPageState({
                type:PAGE_STATE_ACTION.SET_SUCCESS_MESSAGE,
                payload:{
                    message:'client add'
                }
            });
        }else{

            let message = `failed to add found client with id ${clientId}`;

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

    const getClient = () => {
        const url = '/owner';
 
        let formData = new FormData(); // Currently empty
        formData.append('ownerId', clientId);

        axios.post(url, formData)
        .then(response => {
            
            handleSuccess(response);
        })
        .catch(error => {

            handleError(error);
        })
        .finally();
    }

    return getClient;
}