import React, { useReducer } from 'react';

export const ACTION = {
    UPDATE: "UPDATE",
}

export const clientReducer = (state, action) => {
    switch (action.type){
        case ACTION.UPDATE_CLIENT:
            return {...state, [action.payload.field]:action.payload.val};
        default:
            return state;
    }
}
