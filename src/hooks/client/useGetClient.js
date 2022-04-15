import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { LoginContext } from '../../LoginContext';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';

export const useGetClient = (clientId) => {
    const {setPageState} = useContext(PageStateContext);

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

    const handleSuccessFetch = (response) => {
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

    const getClient = () => {
        const url = '/owner' 
    }

    return getClient;
}