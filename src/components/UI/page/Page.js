import React, { useContext } from 'react';
import Style from './page.module.css';
import { PageStateContext } from '../../../contexts/PageStateContext';

const Page = (props) => {

    const {pageState} = useContext(PageStateContext);
    const classes = 'container ' + Style.page;

    return (
    <div className={classes}>
        {props.children}
    </div>
    );
}
 
export default Page;