import Button from '@restart/ui/esm/Button';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const {image, name, description , rating} = service;
    return (
        <div className="service">
            <img src={image} alt="" />
            <h3 className="m-1">{name}</h3>
            <p className="px-3">{description}</p>
            <h6 className="rating"> <Rating
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly></Rating></h6>
            <Link to={`/booking/${name}`}>
            <Button  className="btn btn-outline-light m-3">Book </Button>
            </Link>
        </div>
    );
};

export default Service;