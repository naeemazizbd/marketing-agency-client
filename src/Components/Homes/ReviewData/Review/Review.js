import React from 'react';
import './Review.css'
const Review = (props) => {
    const {quote,name,from ,img} = props.review;
    return (
        <div className="  col-md-4 ">
           <div className="card card-zoom shadow-sm">
           <div className="p-3">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="bg-light p-2 d-flex  align-items-center">
                <img className="mx-3 rounded-circle bg-danger" src={img} alt="" height="50" width="50"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
           </div>
       </div>
    );
};

export default Review;