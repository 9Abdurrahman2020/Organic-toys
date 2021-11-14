import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children, ...rest }) => {
    const { isAdmin, isAdminLoading } = useAuth();
    if(isAdminLoading){
        return <h3 className="text-center">Loading...</h3>
    }
    return (
        <Route
        {...rest}
        render={({location})=> isAdmin ? children : <Redirect
        to={{
            pathname:'/login',
            state:{ from: location }
        }}
        />}
        />
    );
};

export default AdminRoute;