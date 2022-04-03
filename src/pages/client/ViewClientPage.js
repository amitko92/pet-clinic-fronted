import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useGetClient, ACTION} from '../../hooks/client/useGetClient'

const ViewClientPage = () => {

    const params = useParams();
    const {state, dispatch, getClient} = useGetClient(params.clientId);

    const handleOnClick = (e) => {

        dispatch(
            { 
                type: ACTION.UPDATE_CLIENT, 
                payload:{field: 'first_name', val: e.currentTarget.value}
            });
    }
   
    return (
        <div>
            <h1>user id is {state.id}</h1>
            <h1>is updated: {state.isUpdated.toString()}</h1>
            <h3>{JSON.stringify(state)}</h3>
            <input type='text' name='first_name' 
            id='first_name' value={state.value} onChange={handleOnClick}/>
        </div>);
}
 
export default ViewClientPage;