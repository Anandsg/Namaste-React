import React from "react";
import Shimmer from "../Body/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    // Menu path
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    // Menu items list path
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    console.log(itemCards)
    return (
        <div>
            <h3>{name}</h3>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {itemCards.map(item =>
                <li key={item.card.info.id}>
                    {item.card.info.name} - {' Rs.'}
                    {item.card.info.price / 100}
                </li>)}
        </div>
    );
};

export default RestaurantMenu;