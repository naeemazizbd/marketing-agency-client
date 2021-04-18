import React, { useEffect, useState } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';

const AddReview = () => {
    const [review, setReview] = useState({
        name: '',
        email: '',
        description: '',
    });
    const [reviews, setReviews] = useState([]);
    const [isDelete, setIsDelete] = useState(false);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setReview((review) => ({
            ...review,
            [name]: value,
        }));
    };

    useEffect(() => {
        function getData() {
            fetch('http://localhost:5000/api/reviews')
                .then((res) => res.json())
                .then((data) => setReviews(data))
                .catch((err) => console.log(err));
        }
        getData();
        if (isDelete) {
            getData();
            setIsDelete(false);
        }
    }, [isDelete]);

    console.log(reviews);

    const deleteReviewHandler = (id) => {
        const isDeleted = window.confirm('Are you Sure!');
        if (isDeleted) {
            fetch(`http://localhost:5000/api/reviews/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
        }
        setIsDelete(true);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/api/reviews`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

        setIsDelete(true);
    };
    return (
        <div>
            <div className="row">
                <Navbar />

                <div className="col-md-6">
                    <div className="p-5">
                        <h1>Review Page</h1>

                        <form className="card p-3" onSubmit={submitHandler}>
                            <input
                                placeholder="your name"
                                onChange={inputHandler}
                                className="form-control m-2"
                                name="name"
                                defaultValue={review.name}
                            />
                            <input
                                placeholder="your mail"
                                onChange={inputHandler}
                                className="form-control m-2"
                                name="email"
                                defaultValue={review.email}
                            />

                            <textarea
                                rows="3"
                                placeholder="Your Review"
                                onChange={inputHandler}
                                className="form-control m-2"
                                name="description"
                                defaultValue={review.description}
                            />

                            <input
                                className="bg-primary border-0 rounded text-white p-1"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => (
                                <tr key={review._id}>
                                    <th> {review.name} </th>
                                    <td> {review.email} </td>
                                    <td> {review.description} </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                deleteReviewHandler(review._id)
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

export default AddReview;
