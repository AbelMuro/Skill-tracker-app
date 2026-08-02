import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Common/Components/NavigationBar';
import Landing from './Pages/Landing';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ToastMessage from './Common/Components/ToastMessage';
import ForgotPassword from './Pages/Authorization/ForgotPassword';
import {Provider} from 'react-redux';
import Store from '~/Store';
import './global.css';

/* 
    this is where i left off, i need to finish defining the submit event handler in the ForgotPassword component, and
    then i can create the corresponding route on the back end
*/

function App() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path='/' Component={Landing}/>
                    <Route path='/login' Component={Login}/>
                    <Route path='/register' Component={Register}/>
                    <Route path='/forgot-password' Component={ForgotPassword}/>
                </Routes>
                <ToastMessage/>
            </BrowserRouter>
        </Provider>

    )
}

export default App;