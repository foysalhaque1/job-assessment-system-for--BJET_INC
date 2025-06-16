import React, { use } from 'react';
import { AuthContext } from '../Authcontext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {

    
    const {user,loading} = use(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loading){
        return <Loading></Loading>
    }
   else if(user && user?.email){

        return children;
    }else{
        return <Navigate state={location.pathname} to={'/login'} ></Navigate>
    }

};

export default PrivateRoute;