import React, { useState } from 'react';
import './Login.css';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
  }

function Login() {

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };

    // const [signedIn, setSignedIn] = useState(false);

    return (
        <div>
            <GoogleLogin
                clientId="2519917737-d9hlpd2fq2vbo6pp83rs2k9cetc1ahju.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                // onclick={() => setSignedIn(true)}
            />,
        </div>
    )
}

export default Login;
