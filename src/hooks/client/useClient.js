import React, { useState, useReducer,useContext } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { LoginContext } from '../../LoginContext';
import { clientReducer } from '../../reducers/client/ClientReducer';
import { useFetch } from '../fetch/useFetch';

export const useClient = (clientId) => {

    const myFetch = useFetch();

    const [state, dispatch] = useReducer(clientReducer, {
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

    const addClient = () => {
        let url = '/addOwner?';
        url += `fName=${state.first_name}&lName=${state.last_name}&`;
        url += `dateOfBirth=${state.date_of_birth}&registrationDate=${state.registration_date}&`;
        url += `city=${state.city}&street=${state.street}&`;
        url += `house=${state.house_number}&apartment=${state.apartment}`;
        myFetch(url);
    }

    const getClient = () => {
        const url = '/owner'
        myFetch(url);
    }

    return {state, dispatch, getClient, addClient};
}