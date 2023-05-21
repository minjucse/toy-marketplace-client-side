import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../Pages/PageNotFount/PageNotFound";
import Main from "../Pages/Layout/Main";
import Home from '../Pages/Home/Home/Home';
import Blog from "../Pages/Blog/Blog";
import SignIn from '../Pages/Auth/SignIn/SignIn';
import SignUp from '../Pages/Auth/SignUp/SignUp';
import ProductList from'../Pages/Products/Product/List'
import ProductAdd from'../Pages/Products/Product/Upsert'
import MyProduct from'../Pages/Products/Product/UserWiseProduct'

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <PageNotFound/>,
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
        path: '/product-list',
        element: <ProductList></ProductList>
      },
      {
        path: '/my-product',
        element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
        
      },
      {
        path: '/product-add',
        element: <PrivateRoute><ProductAdd></ProductAdd></PrivateRoute>
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