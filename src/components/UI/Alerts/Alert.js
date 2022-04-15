import Style from './alerts.module.css';

const Alert = (props) =>{

    let calsses = Style.message;

    if(props.status === 'error'){
        calsses += ' ' + Style.errorMessage;
    }else if(props.status === 'success'){

        calsses += ' ' + Style.successMessage;
    }

    return (
        <div className={calsses}>
            {props.alertMessage}
        </div>
    );
}

export default Alert;