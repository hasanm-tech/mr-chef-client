import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <Spinner animation="border" role="status"></Spinner>
    }

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;