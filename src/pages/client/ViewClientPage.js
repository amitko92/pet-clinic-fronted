import React, {useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {useClientData} from '../../hooks/client/useClientData';
import Alert from '../../components/UI/Alerts/Alert';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';
import { useGetClient } from '../../hooks/client/useGetClient';

const ViewClientPage = () => {

    const params = useParams();
    const clientId = params.clientId
    const {pageState} = useContext(PageStateContext);
    const {formState, formDispatch} = useClientData(clientId);
    const getClient = useGetClient(clientId, formDispatch);

    useEffect(()=>{

        if(clientId !== -1){
            console.log('typeof clientId ' + typeof clientId);
            getClient();
        }
    }, []);

    console.log('pageState.hasMessage ' + pageState.hasMessage);
    
    return (
        <div>
            {pageState.hasMessage && 
            <Alert 
                status={pageState.messageStatus} 
                message={pageState.message} />}
            <h1>user id is {formState.id}</h1>
            <h3>{JSON.stringify(formState)}</h3>
            <button onClick={getClient}>update</button>
        </div>);
}
 
export default ViewClientPage;