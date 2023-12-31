import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import Error from './Error/Error';
import Colleges from './pages/Colleges/Colleges';
import Details from './pages/Colleges/Details';
import Admission from './pages/Addmission/Admission';
import MyCollege from './pages/MyCollege/MyCollege';
import PrivateRoutes from './Routes/PrivateRoutes';


const router = createBrowserRouter([
  {
      path: '*',
      element: <Error></Error>
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      path: '/',
      element: <Home></Home>
      
    },
    {
      path: 'college',
      element: <Colleges></Colleges>
    },
    
    {
        path: 'details/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({params}) => fetch(`https://college-service-server-rho.vercel.app/colleges/${params.id}`)
    },
    {
          path: 'admission',
          element: <Admission></Admission>
    },
    {
      path: 'myCollege',
      element: <PrivateRoutes><MyCollege></MyCollege></PrivateRoutes>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'register',
      element: <Register></Register>
    }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   

  </React.StrictMode>,
)
