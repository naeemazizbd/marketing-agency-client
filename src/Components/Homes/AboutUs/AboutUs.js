import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="my-5 py-5">
            <div className="row d-flex align-items-center about-container">
                <div className="col-md-6 ">
                    <div className="ms-3 p-4">
                        <h4 className="text-warning">WHY CHOSE US!</h4>
                        <h1>Boots Your <span className="text-primary"> Traffics </span> </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iusto et vel asperiores aspernatur labore repellat nulla tempora. Quis veritatis, itaque consequatur mollitia tempora dolorum sit fugit delectus, dolor, laboriosam sapiente libero perspiciatis atque laudantium quo odit facilis nobis? Non.</p>
                        <button className="btn btn-primary">More About</button>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="shadow m-3 card-zoom p-4 text-center bg-light rounded">
                                <img className="img-fluid w-50" src="https://www.logolynx.com/images/logolynx/05/05642d3aaa3cc2d16f29da71239e2c60.png" alt="" />
                                <h3>SEO Services</h3>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="shadow m-3 card-zoom p-4 bg-light text-center rounded">
                                <img className="img-fluid w-50" src="https://images.credly.com/size/340x340/images/c22ee168-5699-433e-be04-e9f3585d7786/3.png" alt="" />
                                <h3>Content Writing</h3>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="shadow card-zoom m-3 p-4 bg-light text-center rounded">
                                <img className="img-fluid w-50" src="https://www.pngarea.com/pngm/158/1523448_marketing-icon-png-rumble-media-digital-marketing-circled.png" alt="" />
                                <h3>Social Marketing</h3>

                            </div>
                        </div>

                        <div className="col-md-6 ">
                            <div className="shadow m-3 card-zoom p-4 bg-light text-center rounded">
                                <img className="img-fluid w-50" src="https://www.sprinkdigital.com/images/graphics/SocialMediaMarketing.png" alt="" />
                                <h3>Creative Solutions</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;