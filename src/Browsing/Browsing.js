import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import App from '../App';
import Login from './Login';
import Create from './Create';
import '../App.css';

function Browsing(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/app/:passId" element={<App/>} />
                    <Route path="/create" element={<Create/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Browsing;