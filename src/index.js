import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './app/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import components
import Layout from './components/Layout';
import PageTransitionLoader from './components/PageTransLoader';
// lazy load components
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

// create container 
const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <PageTransitionLoader />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "register",
        element: 
          <Suspense fallback={<PageTransitionLoader className="z-10" />}>
            <Register />
          </Suspense>,
        // loader: redirectIfUser,
      },
      {
        path: "login",
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
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
