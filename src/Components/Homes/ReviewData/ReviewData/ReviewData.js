import React from 'react';
import Review from '../Review/Review';
import './ReviewData.css'
const ReviewData = () => {
    const reviewData = [
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Wilson Harry',
            from : 'California',
            img : 'https://i.ibb.co/6WfSb7H/20201013-085356.png'
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Ema Gomez',
            from : 'California',
            img :'https://i.ibb.co/6WfSb7H/20201013-085356.png'
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Aliza Farari',
            from : 'California',
            img : 'https://i.ibb.co/6WfSb7H/20201013-085356.png'
        }
    ]
    return (
        <div className="reviews my-5 py-5 px-3">
        <div className="">
            <div className="section-header ms-3">
                <h5 className="text-warning text-uppercase">Reviews</h5>
                <h1>What Our Clients Says </h1>
            </div>
            <div className="card-deck row mt-5">
                 {
                     reviewData.map(review => <Review review={review} key={review.name}/>)
                 }
             </div>
        </div>
    </div>
    );
};

export default ReviewData;