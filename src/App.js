import React, { useContext, useState } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Style from './styles/app.module.css';
import Dashboard from './pages/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
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

  let page = <div></div>; 
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

    page = (
      <div className={Style.pageContainer}>
        <div className={Style.header}>
          <Header chengeSidebarState={chengeSidebarState} />
        </div>
        <div className={Style.mainContent}>
          {isShowSidebar && <Sidebar />}
          <Page>
            {mainContent}
          </Page>
        </div>
        <div className={Style.footer}>
          <Footer />
        </div>
      </div>
    );
  }else{

    page = (
        <Login/>
      );
  }

  return (
      <BrowserRouter>
        <ProjectDetailsProvider>
          {page}
        </ProjectDetailsProvider>
      </BrowserRouter>
  );
}

export default App;
