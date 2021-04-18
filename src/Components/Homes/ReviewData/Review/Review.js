import './Review.css';

const Review = ({ review }) => {
    return (
        <div className="  col-md-4 ">
            <div className="card card-zoom shadow-sm">
                <div className="p-3">
                    <p className="card-text text-center">
                        {review.description}
                    </p>
                </div>
                <div className="bg-light p-2 d-flex  align-items-center">
                    <img
                        className="mx-3 rounded-circle bg-danger"
                        src={`http://localhost:5000/${review.image}`}
                        alt=""
                        height="50"
                        width="50"
                    />
                    <div>
                        <h6 className="text-primary">{review.name}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
