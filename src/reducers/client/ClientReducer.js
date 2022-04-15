import React, { useReducer } from 'react';

export const CLIENT_FORM_ACTION = {
    UPDATE: "UPDATE",
    UPDATE_ALL_FIELD:'UPDATE_ALL_FIELD',
}

export const clientReducer = (state, action) => {
    switch (action.type){
        case CLIENT_FORM_ACTION.UPDATE:
            return {...state, [action.payload.field]:action.payload.val};
        case CLIENT_FORM_ACTION.UPDATE_ALL_FIELD:

            console.log('UPDATE_ALL_FIELD ');
            return {...state, 
                fName:action.payload.fName,
                lName:action.payload.lName,
                dateOfBirth:action.payload.dateOfBirth,
                registrationDate:action.payload.registrationDate,
                city:action.payload.city,
                street:action.payload.street,
                house:action.payload.house,
                apartment:action.payload.apartment
            };
        default:
            return state;
    }
}
