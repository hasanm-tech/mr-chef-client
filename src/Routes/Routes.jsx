import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Home/Login/Login';
import Register from '../Pages/Register/Register';
import AuthProvider from '../Provider/AuthProvider';
import ChefLayout from '../Layout/ChefLayout/ChefLayout';
import ChefRecipes from '../Shared/ChefRecipes/ChefRecipes';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>,
        }
      ]
    },
    {
      path: 'chef',
      element: <ChefLayout></ChefLayout>,
      children: [
        {
          path: ':id',
          element: <ChefRecipes></ChefRecipes>,
          loader: ({params}) => fetch(`https://mr-chef-server-hasanm-tech.vercel.app/chef/${params.id}`)

        }
      ]
    }
  ]);

export default router;