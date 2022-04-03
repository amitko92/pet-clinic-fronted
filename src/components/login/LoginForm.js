import React, { useContext } from 'react';
import Style from './loginForm.module.css';
import TestIput from '../UI/form/TestInput';
import NumberInput from '../UI/form/NumberInput';
import useLogin from '../../hooks/login/useLogin';
import Alert from '../UI/Alerts/Alert';
import { PageStateContext } from '../../contexts/PageStateContext';
import LoadingSpan from '../UI/LoadingSpan/LoadingSpan';


function LoginForm(props) {
    
    const {pageState} = useContext(PageStateContext);
    const { userName, setUserName, password, setPassword, pin, setPin, login} = useLogin();

    function useHandleSubmit(event) {
        
        event.preventDefault();
        login();
    }

    return (
            <form onSubmit={useHandleSubmit}>
                {pageState.hasMessage && <Alert 
                                            status={pageState.messageStatus} 
                                            alertMessage={pageState.message} />}
                <TestIput name={'username'} id={'username'} 
                tagName={'User Name'} value={userName} setValue={setUserName}/>
                <TestIput name={'password'} id={'password'} 
                tagName={'Password'} value={password} setValue={setPassword}/>
                <NumberInput name={'pin'} id={'pin'} 
                tagName={'Project Number'} value={pin} setValue={setPin}/>
                <button type="submit" onClick={useHandleSubmit}>Login</button>
                {pageState.isLoading && <LoadingSpan />}
            </form>
    );
}

export default LoginForm;