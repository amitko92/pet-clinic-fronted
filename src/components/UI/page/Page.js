import React, { useContext } from 'react';
import Style from './page.module.css';
import { PageStateContext } from '../../../contexts/PageStateContext';
import Alert from '../Alerts/Alert';

const Page = (props) => {

    const {pageState} = useContext(PageStateContext);
    
    return (
    <div className={Style.page}>
        {props.children}
    </div>
    );
}
 
export default Page;