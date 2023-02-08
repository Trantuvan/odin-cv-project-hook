import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/normalize.css';
import './styles/reset.css';
import './styles/index.css';
import { ToggleProvider, EduArrayProvider, EmpArrayProvider } from './hooks/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleProvider>
      <EmpArrayProvider>
        <EduArrayProvider>
          <App />
        </EduArrayProvider>
      </EmpArrayProvider>
    </ToggleProvider>
  </React.StrictMode>,
);
