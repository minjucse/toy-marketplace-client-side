import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Main = () => {
  
  return (
    <div>
      <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
       <ToastContainer></ToastContainer>
    </div>
  )
}

export default Main