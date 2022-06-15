import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { BrowserRouter, Switch, Route,Routes, useInRouterContext } from 'react-router-dom'
import { Navigate,Outlet  } from 'react-router-dom';


function PrivateRoute({component:Component,...rest}) {
    const {user} = useContext(AuthContext);
//   return (
//         <Route {...rest} render={props=>{
//             // return user ? <Component {...props}/> : <Navigate to="/login"/>
//             return user ? <Outlet /> : <Navigate to="login"/>
//         }} />
//   )
// const auth = null; // determine if authorized, from context or however you're doing it

// If authorized, return an outlet that will render child elements
// If not, return element that will navigate to login page
return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute