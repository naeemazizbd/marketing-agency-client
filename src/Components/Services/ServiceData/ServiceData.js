import React from 'react';

const ServiceData = ({ service }) => {
    return (
        <div className="col-md-3 ">
            <div className="card card-zoom mx-2">
                <div className="m-3 w-75 h-75  text-center ">
                  <div className="card-img">
                        <img
                        className="img-fluid "
                        src={`http://localhost:5000/${service.image}`}
                        alt=""
                    />
                  </div>
                </div>

                <div className="text-center p-3">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                   <div className="d-flex">
                   <h3 className="mx-auto">$ {service.price}</h3>
                    <button className="btn btn-primary mx-auto">Check Now</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;
