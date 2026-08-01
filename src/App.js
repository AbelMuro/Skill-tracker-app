import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Common/Components/NavigationBar';
import Landing from './Pages/Landing';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ToastMessage from './Common/Components/ToastMessage';
import {Provider} from 'react-redux';
import Store from '~/Store';
import './global.css';

/* 
    this is where i left off, i need to display the toast message with redux, i need to use the useTypedDispatch in the Form component
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
                </Routes>
                <ToastMessage/>
            </BrowserRouter>
        </Provider>

    )
}

export default App;