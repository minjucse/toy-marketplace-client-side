import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if(loading){
      return <button className="btn btn-square btn-warning loading"></button>
  }

  if(user){
      return children;
  }
  return <Navigate state={{from: location}} to="/sign-in" replace></Navigate>;
}

export default PrivateRoute