import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceData = ({ service }) => {
    return (

        <div className="col-md-3 ">
            <div className="card card-zoom mx-2">

                <div className="m-3">
                    <img className="img-fluid" src={service.img} alt="" />

                </div>


                <div className="text-center p-3">
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                    <button className="btn btn-primary">Check Now</button>
                </div>
            </div>

        </div>

    );
};

export default ServiceData;