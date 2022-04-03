import React, {useReducer, createContext} from 'react';
import ProjectDetails from '../models/ProjectDetails';

export const PAGE_STATE_ACTION = {
    SET_ERROR_MESSAGE: "SET_ERROR_MESSAGE",
    SET_SUCCESS_MESSAGE: "SET_SUCCESS_MESSAGE",
    SET_LOADING_STATE: "SET_LOADING_STATE",
    SET_REMOVE_ERROR_STATE: "SET_REMOVE_ERROR_STATE",
    SET_NOT_LOADING_STATE: "SET_NOT_LOADING_STATE"
}

function reducer(state, action){
    switch (action.type){
        case PAGE_STATE_ACTION.SET_ERROR_MESSAGE:{

            return {...state, 
                isLoading:false,
                hasMessage:true,
                messageStatus:'error',
                message:action.payload.message
            };
        }case PAGE_STATE_ACTION.SET_REMOVE_ERROR_STATE:{

            return {...state, 
                isLoading:false,
                hasMessage:false,
                messageStatus:'',
                message:''
            };
        }case PAGE_STATE_ACTION.SET_SUCCESS_MESSAGE:{

            return {...state, 
                isLoading:false,
                hasMessage:true,
                messageStatus:'success',
                message:action.payload.message
            };
        }case PAGE_STATE_ACTION.SET_LOADING_STATE:{

            return {...state, 
                isLoading:true,
                hasMessage:false,
                messageStatus:'',
                message:''
            };
        }case PAGE_STATE_ACTION.SET_NOT_LOADING_STATE:{

            return {...state, 
                isLoading:false,
                hasMessage:true,
                messageStatus:'',
                message:''
            };    
        }
        default:
            return state;
    }
}

export const PageStateContext = createContext();

export const PageStateProvider = props => {
    const [pageState, setPageState] = useReducer(reducer, {
        isLoading:false,
        hasMessage:false,
        messageStatus:'',
        message:''
    });
    
    return (
        <PageStateContext.Provider value={{pageState, setPageState}}>
            {props.children}
        </PageStateContext.Provider>
    );
}