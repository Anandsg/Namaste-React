import React, { useState } from "react";
import './Body.css';
import RestuarantCard from "./RestuarantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    // state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    return (
        <div>
            <button onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.data.avgRating > 4
                );
                setListOfRestaurants(filteredList);
            }}>Top Rated</button>
            {/* <div className="search">search</div> */}
            <div className="res-container">
                {/* We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as id */}
                {listOfRestaurants.map((restaurant) => {
                    return <RestuarantCard key={restaurant.data.id} {...restaurant.data} />
                })}
            </div>
        </div>
    )
}

export default Body;