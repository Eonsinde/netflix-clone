import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { store } from './store';
// css import
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
// import components
import AuthProvider  from './context/AuthContext';
import BaseLayout from './components/BaseLayout';
import AuthLayout from './components/AuthLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PageTransitionLoader from './components/PageTransLoader';
// lazy load components
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register/Register'));


const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  },
  {
    path: "/test",
    element: <PageTransitionLoader />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "accounts/authorization/register",
        element: 
          <Suspense fallback={<PageTransitionLoader className="z-10" />}>
            <Register />
          </Suspense>,
        // loader: redirectIfUser,
      },
      {
        path: "accounts/authorization/login",
        element: 
          <Suspense fallback={<PageTransitionLoader className="z-10" />}>
            <Login />
          </Suspense>,
        // loader: redirectIfUser,
      },
      // {
      //   path: "logout",
      //   action: logoutUser,
      // },
    ],
  },
]);


function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
    </Provider>
  );
}

export default App;
