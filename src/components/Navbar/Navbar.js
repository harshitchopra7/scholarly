import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <p>Scholarlys</p>
            </div>
            <div className="navbar_login">
            <button className="navbar_button">
                Login
            </button>
            </div>
        </div>
    )
}

export default Navbar;
