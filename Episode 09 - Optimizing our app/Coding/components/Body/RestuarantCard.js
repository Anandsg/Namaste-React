import React from 'react';
import { CDN_URL } from '../../utils/constants';

const RestuarantCard = ({ cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
}) => {
    return (
        <div className='md:w-60 shadow-md md:shadow-none py-4 px-4 md:py-2  hover:shadow-xl rounded flex flex-col gap-1 text-[0.7rem] text-[#535665] '  >
            <div className="res-card">
                <img className="relative w-full min-h-[150px] overflow-hidden aspect-video object-cover block rounded-md"
                    alt="restaurant"
                    src={CDN_URL + cloudinaryImageId} />
                <h4 className='text-lg font-semibold mt-2 text-zinc-600'>
                    {name}
                </h4>
                <h4 className='text-sm'>
                    {cuisines.join(', ')}
                </h4>
                <div className="flex justify-between items-center my-2 font-medium">
                    <div className="flex items-center gap-1 px-1 text-white bg-green-500 font-semibold">
                        <span className="text-[0.6rem]">&#9733;</span>
                        <span className="text-[0.6rem]">
                            {avgRating === "--" ? "4.2" : avgRating}
                        </span>
                    </div>
                    {/* <div className="w-[3px] h-[3px] rounded-full bg-black"></div> */}
                    <div className="res-price">
                        <span className="text-xs pr-5">
                            {costForTwo}
                        </span>
                    </div>
                </div>
                <div className="flex border-t pt-4 gap-2  font-semibold"></div>
            </div>
        </div>
    )
}

export default RestuarantCard;