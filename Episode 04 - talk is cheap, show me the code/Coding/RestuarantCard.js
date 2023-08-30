import React from 'react';
import './Body.css';

const RestuarantCard = ({ cloudinaryImageId,
    name,
    cuisines,
    costForTwoString,
    avgRating,
}) => {
    return (
        <div>
            <div className="res-card">
                <img className="res-img"
                    alt="logo"
                    src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
                        + cloudinaryImageId} />
                <h4>{name}</h4>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{costForTwoString}</h4>
                <h4>{avgRating}</h4>
            </div>
        </div>
    )
}

export default RestuarantCard;