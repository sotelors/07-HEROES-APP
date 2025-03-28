import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = ( ) => {

const { user:{ name } } = useContext(AuthContext);
//console.log(name);

const { dispatch } = useContext( AuthContext );
const history = useHistory();


 const handleLogout = () => {
     
   history.replace("/login");

   dispatch({
     type: types.logout,
     payload: {
       name: "",
     },
   });
 };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand p-1" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2"> */}
            <div className="">
                <ul className="navbar-nav ml-auto">


                    <span className="nav-item nav-link text-info"> 
                        { name }
                    </span>

                    <button 
                        className="nav-item nav-link ml-auto btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>

                    {/* <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link ml-auto" 
                        exact
                        to="/login"
                        
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}