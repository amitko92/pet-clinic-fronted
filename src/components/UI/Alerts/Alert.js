import Style from './alerts.module.css';

const Alert = (props) =>{

    let calsses = Style.alert + ' ' + Style.errorAlert;

    return (
        <div className={calsses}>
            {props.alertMessage}
        </div>
    );
}

export default Alert;