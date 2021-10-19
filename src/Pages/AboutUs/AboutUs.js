import React from 'react';
import aboutus from '../../Images/About us/unnamed.jpg';

const AboutUs = () => {
    return (
        <div className="aboutUs flex-container container w-100 ">
                <div className="w-100 mt-5 text-success about" >
                    <h1 className="text-primary">About Us</h1>
                    <p>We provide the most comprehensive range of healthcare services in Victoria through our three hospital campuses, a large network of community programs and 15 statewide services.</p>
                </div>
                <div className=" w-100 mt-5">
                    <img src={aboutus} alt="" />
                </div>
            </div>
    );
};

export default AboutUs;