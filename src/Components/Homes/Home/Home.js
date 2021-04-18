import React from 'react';
import Service from '../../Services/Service/Service';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import AddReview from '../ReviewData/AddReview/AddReview';
import ReviewData from '../ReviewData/ReviewData/ReviewData';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <Header/>
            <AboutUs/>
            <Service/>
            <Experience/>
            <ReviewData/>
            <Contact/>
            <Subscription/>
            <Footer/>
        
        </div>
    );
};

export default Home;