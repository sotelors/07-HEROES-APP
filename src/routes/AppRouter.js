import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    //Route,
    //Link
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
//import { MarvelScreen } from '../components/marvel/MarvelScreen';
//import { Navbar } from '../components/ui/Navbar';
  

export const AppRouter = () => {
    
    const { user } = useContext(AuthContext);
    //console.log(user);

    return (
        <Router>
            <div>
                 {/* <Navbar />  */}
        
                        
                <Switch>

                        <PublicRoute 
                            exact 
                            path="/login" 
                            component={ LoginScreen }
                            isAuthenticated = { user.logged }
                        />

                        <PrivateRoute 
                            path="/" 
                            component={ DashboardRoutes }
                            isAuthenticated = { user.logged }
                        />
                        {/* <Route exact path="/login" component={ LoginScreen }/> */}
                        {/* <Route path="/" component={ DashboardRoutes }/> */}

                        

                        {/* <Route path="/" component={ DashboardRoutes }/> */}
                </Switch>
            </div>
        </Router>
    );

    
}
