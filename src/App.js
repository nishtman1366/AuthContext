import React from 'react';
import {BrowserRouter, Link, Switch, useRoutes, Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Home from "./Pages/Home";
import {About} from "./Pages/About";
import {Services} from "./Pages/Services";
import {Login} from "./Pages/Login";
import {ProtectedRoute} from "./components/ProtectedRoute";
import GuestLayout from "./Layouts/GuestLayout";
import AuthenticatedLayout from "./Layouts/AuthenticatedLayout";
import {AuthProvider, useAuth} from "./Context/AuthenticationContext";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthProvider><GuestLayout/></AuthProvider>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
                <Route element={<AuthProvider><AuthenticatedLayout/></AuthProvider>}>
                    <Route path="/services"
                           element={<ProtectedRoute><Services/></ProtectedRoute>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
