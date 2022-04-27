import Style from './alerts.module.css';

const Alert = ({status, message}) =>{

    let calsses = 'alert';

    if(status === 'primary'){

        calsses += ' alert-primary';
    }else if(status === 'success'){

        calsses += ' alert-success';
    }else if(status === 'secondary'){

        calsses += ' alert-secondary';
    }else if(status === 'danger' || status === 'error'){

        calsses += ' alert-danger';
    }else if(status === 'info'){

        calsses += ' alert-info';
    }
/*
<div class="alert alert-warning" role="alert">
<div class="alert alert-light" role="alert">
<div class="alert alert-dark" role="alert">
*/

    return (
        <div className={calsses}>
            {message}
        </div>
    );
}

export default Alert;