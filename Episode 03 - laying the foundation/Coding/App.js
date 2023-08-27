// ## `Coding assignments solution` :

// Que: Create a Nested header Element using `React.createElement`(h1,h2,h3 inside a div with class "title")

const header = React.createElement(
    "div",
    {
        className: "Title",
        key: "title",
    },
    [
        React.createElement(
            "h1",
            {
                key: "h1",
            },
            "This is h1 Tag"
        ),
        React.createElement(
            "h2",
            {
                key: "h2",
            },
            "This is h2 Tag"
        ),
        React.createElement(
            "h3",
            {
                key: "h3",
            },
            "This is h3 Tag"
        )
    ]
);

// Create the same element using JSX
const header1 = (
    <div className='Title' key='title'>
        <h1 key='h1'>This is h1 tag</h1>
        <h2 key='h2'>This is h2 tag</h2>
        <h3 key='h3'>This is h3 tag</h3>
    </div>
);

// Que: Create a functional component of the same with JSX
const header3 = () => {
    return (
        <div className='Title' key='title'>
            <h1 key='h1'>This is h1 tag</h1>
            <h2 key='h2'>This is h2 tag</h2>
            <h3 key='h3'>This is h3 tag</h3>
        </div>
    );
};

// Que: Pass attribute into the tag in JSX
const header4 = () => {
    return (
        <div className='Title' key='title'>
            <h1 style={{ color: 'blue' }} key='h1'>This is h1 tag</h1>
            <h2 style={{ color: 'blue' }} key='h2'>This is h2 tag</h2>
            <h3 style={{ color: 'blue' }} key='h3'>This is h3 tag</h3>
        </div>
    );
};

// Que: Composition of Component (Add a component inside another)
const fun1 = () => {
    return (
        <h2>This is fun1</h2>
    );
};

const fun2 = () => {
    return (
        <div>
            <h2>This is fun2</h2>
            <fun1 />
        </div>
    );
};

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
