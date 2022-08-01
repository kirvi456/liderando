import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeConfig } from './config/theme.config';
import { NotificationProvider } from './context/Notification.context';


import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeConfig>
        <NotificationProvider>
          <App />
        </NotificationProvider>
    </ThemeConfig>
  </React.StrictMode>
);
