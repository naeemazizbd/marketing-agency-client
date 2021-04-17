import React from 'react';

const Contact = () => {
    return (
        <div className="my-5 py-5">
            <div className="text-center">
                <h5 className="text-warning">CONTACT</h5>
                <h2>Full free talk with us</h2>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card my-3 p-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, modi.</p>
                        </div>
                        <div className="card p-3 ">
                            <div className="d-flex justify-content-center ">
                                <div className=" ">
                                    <a href="www.facebook.com" target="_blank">
                                        <i className="fab fa-facebook-square p-3 fa-3x"></i>
                                    </a>
                                </div>
                                <div className="">
                                    <a href="">
                                        <i className="fab fa-twitter-square p-3 fa-3x"></i>
                                    </a>
                                </div>
                                <div className="">
                                    <a href="">
                                        <i className="fab fa-linkedin p-3 fa-3x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card my-3 p-3">
                            <h4>015584566987</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                        <img className="img-fluid" src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1-1536x1152.jpg" alt="" />

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mx-3">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Your Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Name..." />

                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Type Your Email..." />

                            <label for="exampleFormControlInput1" className="form-label">Subject</label>
                            <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="btn btn-primary">Send Now</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;