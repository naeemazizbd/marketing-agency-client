import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BrandClient from '../BrandClient/BrandClient';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container ">
            <Navbar />
            <HeaderMain />
            <BrandClient />
        </div>
    );
};

export default Header;