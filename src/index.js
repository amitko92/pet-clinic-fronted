import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import {LoginProvider} from './LoginContext';
import { PageStateProvider} from './contexts/PageStateContext';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
      <PageStateProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
      </PageStateProvider>
    </React.StrictMode>, document.getElementById('root')
);


