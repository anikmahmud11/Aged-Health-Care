import React from 'react';
import news2 from '../../../Images/News/download (1).jpg';
import news3 from '../../../Images/News/download (2).jpg';
import './News.css';

const News = () => {
    return (
        <div>
            <div className="aboutUs flex-container  container w-100 ">
            <div className=" img-container container ">
                    <img className="mt-3" src={news2}alt="" />
                </div>
                <div className="w-100 mt-5 text-success about" >
                    <h1 className="text-danger">Community Vaccination Series Session 1</h1>
                    <p>Here is the first in our series of community information sessions on the COVID-19 vaccines. In this session, Prof Allen Cheng and paediatrician A/Prof  Nigel Crawford explain how the COVID-19 vaccine works in children over 12 and answer questions from the community.</p>
                </div>
                
            </div>
            <br />
            <div className="aboutUs flex-container container  ">
                <div className="w-100 mt-5 text-success about" >
                    <h1 className="text-danger">Keeping hearts alive outside the body</h1>
                    <p>A ground-breaking trial taking place across Australia and New Zealand could change the future of heart transplantation, potentially enabling up to 15 per cent more heart transplants to occur each year.</p>
                </div>
                <div className=" img-container container ">
                    <img className="mt-3 mb-3" src={news3}alt="" />
                </div>
            </div>
        </div>
    );
};

export default News;