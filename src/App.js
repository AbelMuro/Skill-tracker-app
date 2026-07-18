import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Common/Components/NavigationBar';
import Landing from './Pages/Landing';
import './global.css';

/* 
    this is where i left off, i need to continue to add more animation to the SectionOne 
    component, 
*/

function App() {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/' Component={Landing}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;