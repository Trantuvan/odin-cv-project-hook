import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/normalize.css';
import './styles/reset.css';
import './styles/index.css';
import { ToggleProvider } from './hooks/useToggle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </React.StrictMode>,
);
