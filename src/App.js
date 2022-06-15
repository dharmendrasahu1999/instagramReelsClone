import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Feed from './Components/Feed'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Fragment>
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route  path='/' element={<Feed />} /> */}
            {/* <PrivateRoute path="/" element={Feed}/> */}
            {/* <Route exact path='/' element={<PrivateRoute component={<Feed/>}/>}/> */}
            <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/profile/:id' element={<Profile />} />
              <Route exact path='/' element={<Feed />} />
            </Route>



          </Routes>
        </Fragment>
      </AuthProvider>
      {/* <Login /> */}
    </BrowserRouter>
  );
}

export default App;
