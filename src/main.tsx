import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/Home/Home.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import { apiClient } from './services/todosService';

const savedToken = localStorage.getItem('authToken');
if (savedToken) {
  apiClient.defaults.headers.common['Authorization'] = `Basic ${savedToken}`;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);