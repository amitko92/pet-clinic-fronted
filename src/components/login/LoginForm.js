import React, { useContext } from 'react';
import useLogin from '../../hooks/login/useLogin';
import Alert from '../UI/Alerts/Alert';
import { PageStateContext } from '../../contexts/PageStateContext';
import LoadingSpan from '../UI/LoadingSpan/LoadingSpan';
import InputGroup from '../UI/form/InputGroup';

function LoginForm(props) {
    
    const {pageState} = useContext(PageStateContext);
    const { userName, setUserName, password, setPassword, pin, setPin, login} = useLogin();

    let alert = '';

    if(pageState.hasMessage){
        alert = (<Alert 
            status={pageState.messageStatus} 
            alertMessage={pageState.message} />);
    }

    function useHandleSubmit(event) {
        
        event.preventDefault();
        login();
    }

    return (
        <form onSubmit={useHandleSubmit}>
            {alert}

            <InputGroup 
            name={'username'} 
            inputId={'username'} 
            tagName={'User Name'} 
            inputValue={userName}
            isRequired={true} 
            handleChange={value => setUserName(value)}/>

            <InputGroup 
            name={'password'} 
            inputId={'password'} 
            tagName={'Password'}
            inputValue={password}
            isRequired={true}  
            handleChange={value => setPassword(value)}/>

            <InputGroup 
            type={'number'} 
            name={'pin'} 
            inputId={'pin'} 
            tagName={'Project Number'} 
            inputValue={pin}
            isRequired={true} 
            handleChange={value => setPin(value)}/>
            
            <button className='btn btn-primary' type="submit">Login</button>
            {pageState.isLoading && <LoadingSpan />}
        </form>
    );
}

export default LoginForm;