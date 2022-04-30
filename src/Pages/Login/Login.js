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
        <div className='form-div container-fluid'>
            <div className='d-flex justify-content-center mt-5'>
                <div className='login-form'>
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-center form-title'>Please Login</h2>
                        <input className='email-input' type="email" name="email" id="" placeholder='Email' />
                        <br />
                        <input className='password-input' type="password" name="password" id="" placeholder='Password' />
                        <br />
                        <input className='submit-button' type="submit" value="Login" />
                        <p className='text-center mt-3 form-link'>New in Car.com ? <Link className='text-decoration-none form-link' to='/signup'>Create a new account</Link></p>
                        <div className='text-center d-flex justify-content-center align-items-center'>
                            <div style={{ border: '1px solid gray', height: '1px', width: '150px' }}>

                            </div>
                            <p className='px-3'>or</p>
                            <div style={{ border: '1px solid gray', height: '1px', width: '150px' }}>

                            </div>
                        </div>
                    </form>
                    <div>
                        <div>
                            <button onClick={googleSignIn}>Sign in with Google</button>
                        </div>
                        <div onClick={facebookSignIn}>
                            <button>Sign in with Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;