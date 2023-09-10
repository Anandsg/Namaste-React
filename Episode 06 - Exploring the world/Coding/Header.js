import React, { useState } from "react"
import './Header.css';
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnChange, setBtnChange] = useState('Login')

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}
                    className="logo" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnChange === 'Login' ?
                            setBtnChange('Logout') :
                            setBtnChange('Login')
                    }}>{btnChange}</button>
                </ul>

            </div>
        </div>
    )
}

export default Header;