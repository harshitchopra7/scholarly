import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Navbar() {

    const user = useSelector(selectUser);

    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('active');
        var popupp = document.getElementById("popupp");
        popupp.classList.toggle('active');
    }

    return (
        <div className="nav_main">
            <div className="navbar">
                <div className="navbar_logo">
                    <p>Scholarlys</p>
                </div>
                <div className="navbar_login">
                    {!user ?
                        (
                            <Link to="/no-keywords">
                                <button onClick={toggle} className="navbar_button">
                                    Login
                                </button>
                            </Link>
                        )
                        :
                        <div />
                    }
                </div>
                {/* <hr className="hr" /> */}
            </div>
            <hr className="hr" />
        </div>
    )
}

export default Navbar;
