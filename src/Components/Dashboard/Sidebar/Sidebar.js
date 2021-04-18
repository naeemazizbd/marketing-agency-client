import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faSignOutAlt, faShoppingBag,faEnvelopeOpen, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
// import {  faHome } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column col-md-2 justify-content-between col-md-2 py-5 px-4" >
            <ul className="list-unstyled">
            <li>
                    <Link  to="/home" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addServices" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addReview" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faEnvelopeOpen} /> <span> Review</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/order" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUsers} /> <span>Order</span>
                    </Link>
                </li>
               
                
                <li>
                    <Link to="/doctor/setting" className="text-white text-decoration-none" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;