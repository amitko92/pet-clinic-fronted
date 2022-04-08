import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useClient} from '../../hooks/client/useClient';

const ViewClientPage = () => {

    const params = useParams();
    const {state, dispatch, getClient, addClient} = useClient(params.clientId);

    useEffect(()=>{

        if(params.clientId !== -1){

            getClient();
        }
    }, []);

    return (
        <div>
            <h1>user id is {state.id}</h1>
            <h1>is updated: {state.isUpdated.toString()}</h1>
            <h3>{JSON.stringify(state)}</h3>
            <button onClick={addClient}>update</button>
        </div>);
}
 
export default ViewClientPage;