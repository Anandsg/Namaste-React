import React, { useState, useEffect } from "react";
// import './Body.css';
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json)
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h2>looks you're offline, check your internet connection.</h2>
        );
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (

        <div className="">
            <div className="">
                <div className="flex ap-2 md:gap-4 max-w-[560px] w-[90%] mx-auto mt-6">
                    <input type="text"
                        className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow w-1/3"
                        placeholder='Search restaurants'
                        //Binding the input to searchbtn
                        value={searchText}
                        //getting text(value) from input box from normal event handler
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button
                        type="submit"
                        className="bg-orange-400 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
                        onClick={() => {
                            console.log(searchText)
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant)
                        }}
                    >Search</button>
                </div>
                <div className="">
                    <button onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filteredList);
                    }}>Top Rated</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
                {/* We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as id */}
                {filteredRestaurant.map((restaurant) => {
                    return <Link key={restaurant.info.id} to={'restaurant/' + restaurant.info.id}><RestuarantCard  {...restaurant.info} /></Link>
                })}
            </div>
        </div>
    );
};

export default Body;