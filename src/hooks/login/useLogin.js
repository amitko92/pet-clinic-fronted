import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import {LoginContext} from '../../LoginContext';
import LoggedinUser from '../../models/LoggedinUser';
import { ProjectDetailsContext } from '../../contexts/ProjectDetailsContext';
import ProjectDetails from '../../models/ProjectDetails';
import { PageStateContext, PAGE_STATE_ACTION } from '../../contexts/PageStateContext';

export default function useLogin() {
    const {setPageState} = useContext(PageStateContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState(-1);
    const {setIsLoggedIn, setLoggedInUser} = useContext(LoginContext);
    const {setProjectDetails} = useContext(ProjectDetailsContext);
    let navigate = useNavigate();

    const fetch = () => {

        setPageState({
            type:PAGE_STATE_ACTION.SET_LOADING_STATE
        });

        let url = '/login?userName='+userName+'&password='+password+'&projectId='+pin;
        axios.post(url)
        .then(function (response) {
            
            if(response.data.status === -1){
        
                
                setPageState({
                    type:PAGE_STATE_ACTION.SET_ERROR_MESSAGE,
                    payload:{
                        message:'password or user name in incorract'
                    }
                });
            }else if(response.data.status === 1){
                console.log(response.data);
                onSuccessFatch(response.data);
            }
        })
        .catch(function (error) {

            setPageState({
                type:PAGE_STATE_ACTION.SET_ERROR_MESSAGE,
                payload:{
                    message:'שרת לא מגיב'
                }
            });
            console.log(error);
        });
    }

    useEffect(() => {

        setPageState({
            type:PAGE_STATE_ACTION.SET_REMOVE_ERROR_STATE
        });
    },[password, pin, userName]);

    const onSuccessFatch = (data) =>{
        const user = new LoggedinUser(data.user.userName, data.user.password, 
            data.user.projectId, data.user.name, data.user.roles);

        const project = new ProjectDetails(data.project.id, 
            data.project.name, data.project.serialNumber);
        
        setPageState({
            type:PAGE_STATE_ACTION.SET_NOT_LOADING_STATE
        });
        setProjectDetails(project);
        setLoggedInUser(user);
        setIsLoggedIn(true);
        console.log(data);
        navigate("/dashboard");
    }

    const login = () => {
        
        fetch();
    }
    
    return { userName, setUserName, password, setPassword, pin, setPin, login }; 
}