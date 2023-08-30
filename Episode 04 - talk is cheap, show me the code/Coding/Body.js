import React from "react";
import './Body.css';
import RestuarantCard from "./RestuarantCard";
import { restaurantList } from "./ResList";

const Body = () => {
    return (
        <div>
            <div className="search">search</div>
            <div className="res-container">
{/* We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as id */}
                {restaurantList.map((restaurant) => {
                    return <RestuarantCard key={restaurant.data.id} {...restaurant.data} />
                })}
            </div>
        </div>
    )
}

export default Body;