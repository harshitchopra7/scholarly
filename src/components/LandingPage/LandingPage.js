import React from 'react';
import "./LandingPage.css";

function LandingPage() {
    return (
        <div className="landingpage">
            <div className="landingpage_left">
                <p className="landingpage_title">Stay updated with research</p>
                <p className="landingpage_subtitle">Keep up with all the latest research information in one place</p>
                <button className="landingpage_button">GET STARTED</button>
            </div>
            <div className="landingpage_right">
                <p>Video Box</p>
            </div>
        </div>
    )
}

export default LandingPage;