import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        //history.replace('/');

        //mostrar la ultima pantalla visualizada
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'rsotelo'
            }
        })
        
        //history.replace('/');
        history.replace(lastPath);
        
    }
 
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }

            >
                 login
            </button>

        </div>
    )
}
