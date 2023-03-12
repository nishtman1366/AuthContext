import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import logo from "../logo.svg";
import axios from "axios";
import {AuthProvider} from "../Context/AuthenticationContext";

export default function GuestLayout(props) {
    return (
            <div className="App min-h-screen">
                <header className="App-header flex items-center space-x-reverse space-x-4 py-8 px-4">
                    <img src={logo} className="App-logo"
                         style={
                             {textAlign: 'center', marginTop: '5px'}
                         }
                         alt="logo"/>
                    <ul className="list-style-none flex items-center justify-start space-x-reverse space-x-8 transition w-full">
                        <li className="hover:text-gray-300">
                            <Link to="/">صفحه اصلی</Link></li>
                        <li className="hover:text-gray-300"><Link to="/about">درباره ما</Link></li>
                        <li className="hover:text-gray-300"><Link to="/services">خدمات</Link></li>
                    </ul>
                </header>
                <div className="my-12 text-3xl">
                    <Outlet/>
                </div>
            </div>
    )
};