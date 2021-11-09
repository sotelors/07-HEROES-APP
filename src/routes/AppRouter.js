import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link
  } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
//import { MarvelScreen } from '../components/marvel/MarvelScreen';
//import { Navbar } from '../components/ui/Navbar';
  

export const AppRouter = () => {
    

    return (
        <Router>
            <div>
                 {/* <Navbar />  */}
        
                        
                <Switch>
                        <Route exact path="/login" component={ LoginScreen }/>
                        <Route path="/" component={ DashboardRoutes }/>
                        {/* <Route path="/" component={ DashboardRoutes }/> */}
                </Switch>
            </div>
        </Router>
    );

    
}
