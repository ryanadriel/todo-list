import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'cadastro', element: <Cadastro /> },
    ],
  },
]);

export default router;
