import React, { useState, useEffect } from "react";
import './Body.css';
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // Episode 06 - Search functionality 
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    // Episode 06 - useEffect hook
    useEffect(() => {
        getRestaurants();
    }, []);

    // Episode 06 -  fetch API data
    const getRestaurants = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json)
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div>
                    {/* Episode 06 - Search functionality  */}
                    <input type="text"
                        className="search-box"
                        //Binding the input to searchbtn
                        value={searchText}
                        //getting text(value) from input box from normal event handler
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button
                        onClick={() => {
                            console.log(searchText)
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant)
                        }}
                    >Search</button>
                </div>
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurant(filteredList);
                }}>Top Rated</button>
            </div>
            {/* <div className="search">search</div> */}
            <div className="res-container">
                {/* We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as id */}
                {filteredRestaurant.map((restaurant) => {
                    return <RestuarantCard key={restaurant.info.id} {...restaurant.info} />
                })}
            </div>
        </div>
    );
};

export default Body;