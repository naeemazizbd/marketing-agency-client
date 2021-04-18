import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './ReviewData.css';
const ReviewData = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="reviews my-5 py-5 px-3">
            <div className="">
                <div className="section-header ms-3">
                    <h5 className="text-warning text-uppercase">Reviews</h5>
                    <h1>What Our Clients Says </h1>
                </div>
                <div className="card-deck row mt-5">
                    {reviews.map((review) => (
                        <Review review={review} key={review._id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewData;
