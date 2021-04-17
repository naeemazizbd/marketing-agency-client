import React from 'react';

const Subscription = () => {
    return (
        <div className="bg-primary mt-5">
            <div className="row container text-center my-5 p-3 justify-content-center d-flex align-items-center">
                <div className="col-md-6 ">
                    <h3 className="text-white ">Enter Your Mail For Update</h3>
                </div>
                <div className="col-md-6">
                    <form className="form-control d-flex">
                        <input className="form-control " type="search" placeholder="Write Your Mail..." aria-label="Search" />
                        <button className="btn btn-danger px-2" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscription;