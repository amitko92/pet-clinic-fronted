import React, { useContext, useState } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Style from './styles/app.module.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import {LoginContext} from './LoginContext';
import { ProjectDetailsProvider } from './contexts/ProjectDetailsContext';
import ClientsListPage from './pages/client/ClientsListPage';
import ViewClientPage from './pages/client/ViewClientPage';
import Page from './components/UI/page/Page';

function App() {

  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const {isLoggedIn} = useContext(LoginContext);

  const chengeSidebarState = () => {
    setIsShowSidebar(!isShowSidebar);
  }

  let app = ''; 
  let mainContent = <Dashboard />;

  mainContent = (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/viewClientsList" element={<ClientsListPage />} />
        <Route path="/viewClient/:clientId" element={<ViewClientPage />} />
    </Routes>
  );
    
  if(isLoggedIn){

    app = (
      <div className={Style.pageContainer}>
        <div className={Style.header}>
          <Header chengeSidebarState={chengeSidebarState} />
        </div>
        <Page>
          {mainContent}
        </Page>
        <div className={Style.footer}>
          <Footer />
        </div>
      </div>
    );
  }else{

    app = (
        <Login/>
      );
  }

  return (
      <BrowserRouter>
        <ProjectDetailsProvider>
          {app}
        </ProjectDetailsProvider>
      </BrowserRouter>
  );
}

export default App;
