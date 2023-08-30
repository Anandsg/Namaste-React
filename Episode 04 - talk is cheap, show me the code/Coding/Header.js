import React from "react"
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png"
                    className="logo" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

export default Header;