import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span> Review</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/order" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addServices" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;