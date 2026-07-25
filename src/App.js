import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Common/Components/NavigationBar';
import Landing from './Pages/Landing';
import Login from './Pages/Authorization/Login';
import './global.css';

/* 
    this is where i left off, i need to continue designing the FOrm component of the login component
*/

function App() {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/' Component={Landing}/>
                <Route path='/login' Component={Login}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;