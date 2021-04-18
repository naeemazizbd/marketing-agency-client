import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/services')
            .then((res) => res.json())
            .then((data) => setServices(data.data))
            .catch((err) => console.log(err));
    }, []);

    console.log(services);

    return (
        <div className="my-5 px-3">
            <div className=" ms-4  ">
                <h5 className="text-warning">OUR SERVICES </h5>
                <h2 className="">We Provide This Service</h2>
            </div>
            <div className="d-flex  justify-content-center">
                <div className=" row  ">
                    {services?.map((service) => (
                        <ServiceData service={service} key={service._id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
