import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Navbar() {

    const user = useSelector(selectUser);

    return (
        <div className="navbar">
            <div className="navbar_logo">
                <p>Scholarlys</p>
            </div>
            <div className="navbar_login">
            {!user ? 
            (
                <Link to="/no-keywords">
                    <button className="navbar_button">
                        Login
                    </button>
                </Link>
            ) 
            :
                <div/>
            }
            </div>
        </div>
    )
}

export default Navbar;
