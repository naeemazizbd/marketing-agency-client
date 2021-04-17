import React from 'react';
import './Experience.css'
const Experience = () => {
    return (
        <div className="my-5 py-5 experience-container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="p-3">
                        <img className="img-fluid" src="http://www.pngplay.com/wp-content/uploads/6/Email-Marketing-Vector-Transparent-File.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3">
                        <h5 className="text-warning">EXPERIENCE</h5>
                        <h2>Our Success Experience Rate!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam saepe placeat possimus quod sunt vitae voluptatibus aliquam molestias, officia eaque veritatis asperiores. Quis harum eum magnam autem eius facere odio unde repudiandae rem, laudantium molestiae ea incidunt, vero blanditiis!</p>
                        <div className="">SEO Service</div>
                        <div class="progress my-2">
                            <div class="progress-bar" role="progressbar" Style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                        <div className="">Content Writing</div>
                        <div class="progress my-2">
                            <div class="progress-bar" role="progressbar" Style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>

                        <div className="">Social Media Marketing</div>
                        <div class="progress my-2">
                            <div class="progress-bar" role="progressbar" Style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>

                        <div className="">Creative Ads Solutions</div>
                        <div class="progress my-2">
                            <div class="progress-bar" role="progressbar" Style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                        </div>
                        <button className="btn btn-warning px-4">More Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;