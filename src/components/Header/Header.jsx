import React from 'react';
import "./Header.css"
import logo from "../../images/Logo.svg"
const Header = () => {
    return (
        <nav className='w-full h-20 bg-slate-800 flex justify-between items-center px-14'>
            <img src={logo} alt="" srcset="" />
            <div className='header text-white'>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;