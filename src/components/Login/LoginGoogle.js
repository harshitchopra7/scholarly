import React from 'react';
import './LoginGoogle.css';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../../firebase';
import { login } from '../features/userSlice';
import google from '../images/google.png';

function LoginGoogle() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider) 
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photURL
            }))
        }).catch(error => alert(error.message));
    };
    
    return (
        <div className="logingoogle">
            
            <button onClick={signIn}><img src={google} alt="" />Login with Google</button>
        </div>
    )
}

export default LoginGoogle;
