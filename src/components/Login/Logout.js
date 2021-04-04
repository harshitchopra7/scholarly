import React from 'react';
import { GoogleLogout } from 'react-google-login';

function Logout() {

    const onSuccess = () => {
        alert("Logged out successfully");
    };

    return (
        <div>
            <GoogleLogout
             clientId="2519917737-d9hlpd2fq2vbo6pp83rs2k9cetc1ahju.apps.googleusercontent.com"
             buttonText="Logout"
             onLogoutSuccess={onSuccess}
            >
            </GoogleLogout>
        </div>
    )
}

export default Logout;
