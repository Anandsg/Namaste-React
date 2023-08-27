/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

import React from 'react'
import logo from './logo.png';
import './Header.css';
import userIcon from './userIcon.png';

const Header = () => {
    return (
        <>
          <header className="header">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="center">
              <input
                className="input"
                type="text"
                placeholder="Search anything you want..."
              />
              <button type="submit">
                submit
              </button>
            </div>
            <div className="right">
              <img src={userIcon} alt="User Icon" />
            </div>
          </header>
        </>
      );
    };

export default Header;