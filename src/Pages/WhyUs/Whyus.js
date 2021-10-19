import React from 'react';
import whyus from'../../Images/Whyus/download.png';
import './Whyus.css';

const Whyus = () => {
    return (
        <div>
            <div className=" flex-container container w-100 ">
                <div className="w-100 mt-5 text-success" >
                    <h1>WHY US</h1>
                    <p>With this in mind, the  Government is taking proactive steps and has commissioned Aspen Medical, who is heavily involved in the national response, to prepare a number of contingency measures to ensure that we as a community are prepared and able to assist elderly Australians should the need arise.</p>
                </div>
                <div className=" img w-100 mt-5 mb-5">
                    <img src={whyus} alt="" />
                </div>
            </div>
        </div>
        
    );
};

export default Whyus;