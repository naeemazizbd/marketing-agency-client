import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddServices = () => {
    const [services, setServices] = useState([]);
    const [service, setService] = useState({
        title: '',
        description: '',
        price: '',
    });
    const [isChange, setIsChange] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => {
        function getData() {
            fetch('https://peaceful-temple-45354.herokuapp.com/api/services')
                .then((res) => res.json())
                .then((data) => setServices(data.data))
                .catch((err) => console.log(err));
        }
        getData();
        if (isChange) {
            getData();
            setIsChange(false);
        }
    }, [isChange]);

    const imageHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setService((service) => ({
            ...service,
            [name]: value,
        }));
    };

    const deleteServiceHandler = (id) => {
        const isChanged = window.confirm('Are you Sure!');
        if (isChanged) {
            fetch(`https://peaceful-temple-45354.herokuapp.com/api/services/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
        }
        setIsChange(true);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        if (image) formData.append('image', image);

        for (const key of Object.keys(service)) {
            formData.set(key, service[key]);
        }

        fetch(`https://peaceful-temple-45354.herokuapp.com/api/services`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        setIsChange(true);
        console.log(service, image);
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <div className=" p-5 ">
                        <form className="card p-3" onSubmit={submitHandler}>
                            <input
                                placeholder="Service Name"
                                onChange={inputHandler}
                                className="form-control m-2"
                                name="title"
                                defaultValue={service.name}
                            />
                            <textarea
                                placeholder="service details"
                                onChange={inputHandler}
                                className="form-control m-2"
                                name="description"
                                rows="3"
                                defaultValue={service.description}
                            />
                            <input
                                placeholder="price"
                                onChange={inputHandler}
                                className="form-control m-2"
                                name="price"
                                type="number"
                                defaultValue={service.price}
                            />
                            {/* onChange={handleImageUpload}  */}
                            <input
                                onChange={imageHandler}
                                className="form-control m-2"
                                name="exampleRequired"
                                type="file"
                            />
                            <input
                                className="bg-primary border-0 rounded text-white p-1"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
                <div className="col-md-5 p-0">
                    <h1>All Services</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Service</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service._id}>
                                    <th> {service.title} </th>
                                    <td> {service.price} </td>
                                    <td> {service.description} </td>
                                    <td>
                                        <img
                                            src={`https://peaceful-temple-45354.herokuapp.com/${service.image}`}
                                            width="100px"
                                            alt=""
                                        />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                deleteServiceHandler(
                                                    service._id
                                                )
                                            }
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddServices;
