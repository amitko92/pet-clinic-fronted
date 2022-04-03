import React, {useState, createContext} from 'react';
import LoggedinUser from './models/LoggedinUser';

export const LoginContext = createContext();

export const LoginProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState(new LoggedinUser);
    
    return (
        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser}}>
            {props.children}
        </LoginContext.Provider>
    );
}
