import React, { useState } from 'react';
import SideNavbarInnerItem from './SideNavbarInnerItem';
import SideNavbarItem from './SideNavbarItem';

function SideNavbar() {

    const [activeTab, setActiveTab] = useState('/dashboard');

    let clientOption = (
        <div>
            <SideNavbarInnerItem 
                to={'/viewClient/-1'} 
                title={'add new client'} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}/>
            <SideNavbarInnerItem 
                to={'/viewClientsList'} 
                title={'view clients list'}
                activeTab={activeTab} 
                setActiveTab={setActiveTab}/>
            <SideNavbarInnerItem 
                to={'/viewAnimalsList'} 
                title={'view animals list'}
                activeTab={activeTab} 
                setActiveTab={setActiveTab}/>
        </div>
    );

    let recordOption = (
        <div>
            <SideNavbarInnerItem 
                to={'/money'} 
                title={'money'} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}/>
            <SideNavbarInnerItem 
                to={'/food'} 
                title={'food'}
                activeTab={activeTab} 
                setActiveTab={setActiveTab}/>
        </div>
    );

    return (
        <div>
            <SideNavbarItem title={'Clients'} innertItems={clientOption}/>
            <SideNavbarItem title={'Records'} innertItems={recordOption}/>
        </div>
    );
}

export default SideNavbar;