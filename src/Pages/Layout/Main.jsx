import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
//import useTitle from '../../hooks/useTitle';


const Main = () => {
  //useTitle('Home');

  return (
    <div>
      <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

export default Main