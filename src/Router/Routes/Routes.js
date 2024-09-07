import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Spinner from '../../Pages/Shared/Spinner/Spinner';
import NotFound from '../../Pages/NotFound/NotFound';
import Chairs from '../../Pages/Chairs/Chairs';
import CartDetails from '../../Pages/CartDetails/CartDetails';
import PrivateRoute from '../../Components/PrivateRoute/PrivateRoute';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main> </Main>,
        children: [
            {
                path:'/',
                element:<PrivateRoute><Chairs></Chairs></PrivateRoute> 
            },
            {
                path:'/rocking_chairs',
                element:<PrivateRoute><Chairs></Chairs></PrivateRoute> 
            },
            {
                path:'/lounge_chairs',
                element:<PrivateRoute><Chairs></Chairs></PrivateRoute> 
            },
            {
                path:'/side_chairs',
                element:<PrivateRoute><Chairs></Chairs></PrivateRoute> 
            },
            
        ]
            
        
    },

     {
        path: '/cart-details',
        element:<PrivateRoute><CartDetails></CartDetails></PrivateRoute> 
    },
    {
        path: '/register',
        element:<Register></Register>
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    {
        path: '/spinner',
        element:<Spinner></Spinner>
    },
    {
        path: '*',
        element: <NotFound></NotFound>

    }
   
        
   
])