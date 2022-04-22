import React, { useReducer } from 'react';

export const CLIENT_FORM_ACTION = {
    UPDATE_FIELD: "UPDATE_FIELD",
    UPDATE_ALL_FIELD:'UPDATE_ALL_FIELD',
    UPDATE_IS_NEW_CLIENT: "UPDATE_IS_NEW_CLIENT",
}

export const clientReducer = (state, action) => {
    /*
    {
    type:CLIENT_FORM_ACTION.UPDATE_FIELD,
    payload:{
        value:value,
        isValid:isValid,
        message:message
    }
}*/
    let newField = {};
    switch (action.type){
        case CLIENT_FORM_ACTION.UPDATE_FIELD:

            newField = {
                value: action.payload.value,
                isValid: action.payload.isValid,
                message: action.payload.message,
                isRequired: action.payload.isRequired,
            };

            return {...state, 
                [action.payload.field]:newField,
                hasModified:true
            };
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
