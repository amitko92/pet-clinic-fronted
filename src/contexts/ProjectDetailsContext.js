import React, {useState, createContext} from 'react';
import ProjectDetails from '../models/ProjectDetails';

export const ProjectDetailsContext = createContext();

export const ProjectDetailsProvider = props => {
    const [projectDetails, setProjectDetails] = useState(new ProjectDetails);
    
    return (
        <ProjectDetailsContext.Provider value={{projectDetails, setProjectDetails}}>
            {props.children}
        </ProjectDetailsContext.Provider>
    );
}