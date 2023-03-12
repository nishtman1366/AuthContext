import React from "react";
import {Link, Outlet} from "react-router-dom";
import logo from "../logo.svg";
import {AuthProvider, useAuth} from "../Context/AuthenticationContext";

export default function AuthenticatedLayout() {
    const {logout} = useAuth()
    const {user} = useAuth()
    return (
        <AuthProvider>
            <div className="App">
                <header className="App-header flex items-center space-x-reverse space-x-4 py-8 px-4">
                    <div className=" flex items-center space-x-reverse space-x-4 flex-1">
                        <img src={logo} className="App-logo"
                             style={
                                 {textAlign: 'center', marginTop: '5px'}
                             }
                             alt="logo"/>
                        <ul className="text-sm list-style-none flex items-center justify-start space-x-reverse space-x-8 transition">
                            <li className="hover:text-gray-300">
                                <Link to="/">صفحه اصلی</Link></li>
                            <li className="hover:text-gray-300"><Link to="/about">درباره ما</Link></li>
                            <li className="hover:text-gray-300"><Link to="/services">خدمات</Link></li>
                        </ul>
                    </div>
                    <div className="mr-auto flex text-sm">
                        <div>سلام {user?.first_name}</div>
                        <div className="hover:text-gray-300 cursor-pointer" onClick={logout}>(خروج)</div>
                    </div>
                </header>
                <div>
                    <Outlet/>
                </div>
            </div>
        </AuthProvider>
    )
};