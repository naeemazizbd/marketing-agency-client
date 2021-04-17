import React from 'react';
import'./Footer.css'
const Footer = () => {
    return (
        <div className=" footer-container py-5">
            <div className="row  px-3">
                <div className="col-md-3">
                    <div className="ps-3">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem voluptatum vitae? Exercitationem, accusantium. Laudantium voluptatibus ipsa dolorem adipisci totam.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div div className="">
                        <h3>Pages</h3>
                        <p><a href="">About</a></p>
                        <p><a href="">Contact</a></p>
                        <p><a href="">About</a></p>
                        <p><a href="">Contact</a></p>

                    </div>
                </div>

                <div className="col-md-3">
                    <div div className="">
                        <h3>Pages 2 </h3>
                        <p><a href="">About</a></p>
                        <p><a href="">Contact</a></p>
                        <p><a href="">About</a></p>
                        <p><a href="">Contact</a></p>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="">
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
                </div>
            </div>
            <div className="text-center">
                <p><i class="fa fa-copyright" aria-hidden="true"></i>Naeem Aziz Chowdhury</p>
            </div>
        </div>
    );
};

export default Footer;