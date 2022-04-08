import React, {useContext} from 'react';
import axios from 'axios';
import { LoginContext } from '../../LoginContext';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';

export const useFetch = () =>{

    const {setIsLoggedIn} = useContext(LoginContext);
    const {setPageState} = useContext(PageStateContext);

    const defaultHandleError = (error) => {
        console.log('defaultHandleError!: error' + error);
    }

    const defaultHandleSeccessr = (response) => {
        console.log('defaultHandleSeccessr!: response' + response);
    }

    const myFetch = (
        url = '/', 
        handleError = defaultHandleError, 
        handleSeccess = defaultHandleSeccessr,
        needToUpdateLoading = false) => {

        if(needToUpdateLoading){
            setPageState({
                type:PAGE_STATE_ACTION.SET_LOADING_STATE
            });
        }    

        axios.post(url)
        .then((response => {
            
            // need to check if has sesstion
            if(response.status === -1){

                setPageState({
                    type:PAGE_STATE_ACTION.SET_ERROR_MESSAGE,
                    payload:{
                        message:'need to login'
                    }
                });

                setIsLoggedIn(false);
            }else{

                // callback
                handleSeccess(response);
            }
        }))
        .catch(error => {

            setPageState({
                type:PAGE_STATE_ACTION.SET_ERROR_MESSAGE,
                payload:{
                    message:error.message.trim()
                }
            });

            handleError(error);
        })
        .finally();
    }

    return myFetch;
}