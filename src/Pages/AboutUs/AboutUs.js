import React from 'react';
import Chart from 'react-google-charts';
import aboutus from '../../Images/About us/unnamed.jpg';

const AboutUs = () => {
    return (
       <div>
            <div className="aboutUs flex-container container w-100 ">
            <div className="w-100 mt-5 text-success about" >
                <h1 className="text-primary">About Us</h1>
                <p>We provide the most comprehensive range of healthcare services in Victoria through our three hospital campuses, a large network of community programs and 15 statewide services.</p>
            </div>
            <div className=" w-100 mt-5">
                <img src={aboutus} alt="" />
            </div>
            
        </div>
       
        <div className="text-center container w-100 ">
        <Chart
            width={'300px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7],
            ]}
            options={{
                title: 'My Daily Activities',
                // Just add this option
                pieHole: 0.4,
            }}
            rootProps={{ 'data-testid': '3' }}
        />
    </div>
    </div>
    );
};

export default AboutUs;