import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
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
import reportWebVitals from './reportWebVitals';
// import components
import App from './App';
import AuthProvider, { ProtectedView } from './context/AuthContext';
import AuthLayout from './components/AuthLayout';
import PageTransitionLoader from './components/PageTransLoader';
// lazy load components
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register/Register'));


// create container 
const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedView><App /></ProtectedView>,
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

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
