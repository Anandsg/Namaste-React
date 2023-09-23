import React, { useState } from "react"
// import './Header.css';
import { LOGO_URL } from '../../utils/constants';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import {
    BuildingOfficeIcon,
    HomeIcon,
    PhoneIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/solid';



const Header = () => {


    const [isLoggedin, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const onlineStatus = useOnlineStatus();
    // console.log('Header rendered')

    // if No dependency array - [] => useEffect will be called everytime when component render
    // if there is dependency with empty array - [] => useEffect will be called initial render (just once)
    // if there is dependecy with value in it [btnChange] => useEffect will be called everytime 
    // when btnChange updated

    // useEffect(() => {
    //     console.log('Header useEffect');
    // }, [btnChange])

    return (
        <div className="flex justify-between px-28 shadow-md">
            <div className="logo-container">
                <img src={LOGO_URL}
                    className="w-32 p-5" alt="logo" />
            </div>
            <div className="flex items-center m-3">
                <ul className="flex">
                    {/* <li className="className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2 text-gray-700">
                        {onlineStatus === true ? "user online: 🟢" : "user offline: ⛔️"}
                    </li> */}
                    <Link to='/'
                        className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                        <HomeIcon className='w-4 h-4 text-gray-700' />
                        <li className="">
                            Home
                        </li>
                    </Link>
                    <Link to='/about'
                        className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                        <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{' '}
                        <li className="hidden md:block">
                            About
                        </li>
                    </Link>
                    {/* <Link to='/instamart'>
                        <li className="hidden md:block">Instamart</li>
                    </Link> */}
                    <Link to='/contact' className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                        <PhoneIcon className='w-4 h-4 text-gray-700' />{' '}
                        <li className="hidden md:block">
                            Contact
                        </li>
                    </Link>
                    <Link to='/cart'
                        className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                        <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
                        <li className="hidden md:block">Cart</li>
                    </Link>
                    {isLoggedin ? (
                        <button className="ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex"
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Logout
                        </button>
                    ) : (
                        <button className="ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex" onClick={() => navigate('/login')}>
                            Login
                        </button>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header;