import React, { useState } from 'react';
import "./LandingPage.css";
import { Link, useHistory} from "react-router-dom";
import video from '../video/Scholarlys_Demo.mp4';
import LoginGoogle from '../Login/LoginGoogle';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../firebase';
import { login, selectUser } from '../features/userSlice';
import google from '../images/google.png';

function LandingPage() {

    // const [state, setState] = ("");

    // state = {
    //     seen: false
    //     };

    //     const togglePop = () => {
    //     setState({
    //      seen: !this.state.seen
    //     });
    //    };

    const user = useSelector(selectUser);

    var history = useHistory();

    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('active');
        var popupp = document.getElementById("popupp");
        popupp.classList.toggle('active');
        push();
    }

    const push = () => {
        if(user) {
            history.push("/no-keywords");
        }
        else {
            history.push("/");
        }
    } 

    const dispatch = useDispatch();

    // const signIn = () => {
    //     auth.signInWithPopup(provider)
    //         .then(({ user }) => {
    //             dispatch(login({
    //                 displayName: user.displayName,
    //                 email: user.email,
    //                 photoURL: user.photURL
    //             }))
    //         }).catch(error => alert(error.message));
    // };

    return (
        <div className="landingpagee">
            <div className="nav_mainn">
                <div className="navbar">
                    <div className="navbar_logo">
                        <p>Scholarlys</p>
                    </div>
                    <div className="navbar_login">
                        <button onClick={toggle} className="navbar_button" style={{backgroundColor: 'white', color: '#318CE7'}}>
                            Login
                        </button>
                    </div>
                    {/* <hr className="hr" /> */}
                </div>
                {/* <hr className="hr" /> */}
            </div>
            <div className="landingpage">
                <div className="landingp" id="blur">
                    {/* <div className="landingpage_left">
                <p className="landingpage_title">Stay updated with research</p>
                <p className="landingpage_subtitle">Keep up with all the latest research information in one place</p>
                <Link to="/no-keywords">
                    <button className="landingpage_button">GET STARTED</button>
                </Link>
            </div>
            <div className="landingpage_right">
                <p>Video Box</p>
            </div> */}

                    <div className="landingpage_top">
                        <p>Keep up with the latest research information, All in one place</p>
                    </div>
                    <div className="landingpage_mid">
                        <p>Scholarlys collects information from various sources and gives you updates on what’s happening in your research field.</p>
                    </div>
                    <div className="vid">
                        <video src={video} autoPlay="true" type="video/mp4" muted loop />

                        {/* <source autoPlay={true} src={video} type="video" /> */}

                    </div>
                    {/* <div className="b">
                <button>
                    Get Started
                </button>
            </div> */}

                    {/* <div>

    <div className="btn" onClick={togglePop}>
      <button>New User?</button>
    </div>
    {this.state.seen ? <PopUp toggle={togglePop} /> : null}
   </div> */}

                    {/* <div className="popup">
                <Popup trigger={<button className="trigger_button">Get Started</button>} position="top left">
                    {close => (
                        <div className="close_top_top">
                            <div className="close_top">
                                <div className="close_f">
                                    <p className="we">Welcome to Scholarlys</p>
                                    <div className="cl">
                                        <a className="close" onClick={close}>
                                            &times;
                                        </a>
                                    </div>
                                </div>
                                <div className="vn">
                                    <div className="popup pop">
                                        <button className="g" ><img src={google} alt="" />Login with Google</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div> */}

                    {/* <div className="popup">
                <Popup trigger={<button className="popup_button">Get Started</button>} position="top left">
                    {close => (
                        <div className="popup_main">
                        <div className="popup_container">
                            <div className="popup_content">
                            Content here
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            </div>
                        </div>
                        </div>
                    )}
                </Popup>
            </div> */}


                    {/* <div>
                <p className="fo">2021 © Scholarlys</p>
            </div> */}


                    <div className="popup" >
                        <button className="popup_button" onClick={toggle}>Get Started</button>
                    </div>
                </div>

                <div id="popupp">
                    <div className="cross_main">
                        <p className="cross" onClick={toggle}>&times;</p>
                    </div>
                    <div className="welcome_main">
                        <p className="welcome">Welcome to Scholarlys</p>
                    </div>
                    <div className="login_google">
                        <LoginGoogle />
                    </div>
                </div>


            </div>
            <div className="foot">
                <p>©2021 Scholarlys</p>
            </div>
        </div>
    )
}

export default LandingPage;
