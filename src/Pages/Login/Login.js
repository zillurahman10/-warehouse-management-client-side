import React from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(email, password)

        console.log(email, password);
    }

    if (user || googleUser || facebookUser) {
        navigate('/')
    }

    const googleSignIn = () => {
        signInWithGoogle()
    }
    const facebookSignIn = () => {
        signInWithFacebook()
    }
    return (
        <div className='banner-image'>
            <div className='sign-up-form'>
                <h1>Sign Up Now</h1>
                <form>
                    <input type="email" name='email' placeholder='Your email' required />
                    <input type="password" name='password' placeholder='Your password' required />
                    <p>I agree the terms of services</p>
                </form>
            </div>
        </div>
    );
};

export default Login;