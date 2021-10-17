import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { image, name, description } = service;
    return (
        <div className="service">
            <img src={image} alt="" />
            <h3 className="m-1">{name}</h3>
            <p className="px-3">{description}</p>
            <Button className="btn btn-outline-light m-3">Book </Button>
        </div>
    );
};

export default Service;