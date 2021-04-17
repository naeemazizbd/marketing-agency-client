import React from 'react';
import ServiceData from '../ServiceData/ServiceData';

const Service = () => {

    const serviceData = [
        {
            name: 'Doctor Chamber Visit',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iste asperiores, ut quos vel vitae rerum voluptas quam facilis architecto.',
            img: 'https://i.ibb.co/SyR7QQb/digital-marketing-team-41910-363.png',
        },
        {
            name: 'Home Medical Service',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iste asperiores, ut quos vel vitae rerum voluptas quam facilis architecto.',
            img: 'https://i.ibb.co/SyR7QQb/digital-marketing-team-41910-363.png',
        },
        {
            name: 'Ambulance Service',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iste asperiores, ut quos vel vitae rerum voluptas quam facilis architecto.',
            img: 'https://i.ibb.co/SyR7QQb/digital-marketing-team-41910-363.png',
        },
        {
            name: 'Ambulance Service',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iste asperiores, ut quos vel vitae rerum voluptas quam facilis architecto.',
            img: 'https://i.ibb.co/SyR7QQb/digital-marketing-team-41910-363.png',
        }
    ]
    return (
        <div className="my-5 px-3">
            <div className=" ms-4  ">
                <h5 className="text-warning">OUR SERVICES </h5>
                <h2 className="">We Provide This Service</h2>

            </div>
            <div className="d-flex  justify-content-center">
                <div className=" row  ">
                    {
                        serviceData.map(service => <ServiceData service={service} key={service.name}></ServiceData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;