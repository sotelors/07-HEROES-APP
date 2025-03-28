import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    console.log(rest)
    //console.log(rest.location.pathname);
    console.log(rest.location.pathname + rest.location.search)
    localStorage.setItem('lastPath',rest.location.pathname  + rest.location.search);

    return (
        <Route { ...rest }
        component={  (props) => (
            ( isAuthenticated )
              ? (<Component { ...props } />)
              : ( <Redirect to="login"/> )
        )}
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}