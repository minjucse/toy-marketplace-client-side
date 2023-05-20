import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PageNotFount from "../Pages/PageNotFount/PageNotFount";
import Main from "../Pages/Layout/Main";
import Home from '../Pages/Home/Home/Home';
import Blog from "../Pages/Blog/Blog";
import SignIn from '../Pages/Auth/SignIn/SignIn';
import SignUp from '../Pages/Auth/SignUp/SignUp';


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <PageNotFount/>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/sign-in',
        element: <SignIn></SignIn>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },

    ]
  },


]) 

export default Routes