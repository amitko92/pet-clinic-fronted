import React, { useState } from 'react';
import Style from './login.module.css';
import LoginForm from '../../components/login/LoginForm';

function Login(props) {


    return (
        <div className={Style.loginMainContainer}>
            <div className={Style.containerItem}>
                <div className={Style.formContainer}>
                    <h1>Login Form</h1>
                    <LoginForm setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn} setUser={props.setUser}/>
                </div>
            </div>
            <div className={Style.containerItem}>
                <img className={Style.loginImg} src='../../../pictures/login.webp' alt='woman and a dog'/>
            </div>
        </div>
    );
}

export default Login;