import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
const Dashboard = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                <Sidebar/>

                </div>
                <div className="col-md-5">
                    <h3>All Service List</h3>
                </div>
                <div className="col-md-5">
                    <h3>All Reviews</h3>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;