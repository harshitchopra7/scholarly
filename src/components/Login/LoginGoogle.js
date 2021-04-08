import React from 'react';
import './LoginGoogle.css';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../../firebase';
import { login } from '../features/userSlice';
import google from '../images/google.png';
import { Link } from 'react-router-dom';

function LoginGoogle() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider) 
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photURL,
                uid: user.uid
            }))
        }).catch(error => alert(error.message));
    };
    
    return (
        <div className="logingoogle">
            
            <button className="lg_button" onClick={signIn}><Link className="text-decoration" to="/no-keywords"><img className="lg_img" src={google} alt="" />Login with Google</Link></button>
        </div>
    )
}

export default LoginGoogle;
