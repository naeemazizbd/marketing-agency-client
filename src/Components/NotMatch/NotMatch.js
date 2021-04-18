import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const NotMatch = () => {
    return (
        <div>
            <Navbar/>
            <div className="text-center d-flex justify-content-center">
                <img className="img-fluid w-100" src="https://assets.prestashop2.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln" alt=""/>
            </div>
            <Footer/>
        </div>
    );
};

export default NotMatch;