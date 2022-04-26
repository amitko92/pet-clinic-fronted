import React, {useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {useClientData} from '../../hooks/client/useClientData';
import Alert from '../../components/UI/Alerts/Alert';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';
import { useGetClient } from '../../hooks/client/useGetClient';
import Style from './client.module.css';
import AddClientForm from '../../components/client/AddClientForm';

const ViewClientPage = () => {

    const params = useParams();
    const clientId = params.clientId
    const {pageState} = useContext(PageStateContext);
    const {formState, formDispatch} = useClientData(clientId);
    const getClient = useGetClient(clientId, formDispatch);
    let alert = '';
    
    useEffect(()=>{

        if(clientId != '-1'){
            console.log('typeof clientId ' + typeof clientId);
            getClient();
        }
    }, []);

    if(pageState.hasMessage){
        alert = (
            <Alert 
            status={pageState.messageStatus} 
            message={pageState.message} />
        );
    }
    
    return (
        <>
            {alert}
            <h1>Client Page</h1>
            <AddClientForm formState={formState} formDispatch={formDispatch}/>
            <p>{JSON.stringify(formState)}</p>
        </>
    );
}
 
export default ViewClientPage;