import React, { use } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user, loading}= use(AuthContext);
  // console.log(user)
 
  const location = useLocation();
  // console.log(location)

  if(loading){
    return <Loading/>;
  }
  if(user && user?.email){
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"/>
  
}

export default PrivateRoute
