import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <p>Scholarlys</p>
            </div>
            <div className="navbar_login">
            <Link to="/login">
                <button className="navbar_button">
                    Login
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Navbar;
