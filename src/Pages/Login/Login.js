import React from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

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
        toast(user?.displayName, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate('/')
    }

    const googleSignIn = () => {
        signInWithGoogle()
    }
    const facebookSignIn = () => {
        signInWithFacebook()
    }
    return (
        <div className='w-25 mx-auto shadow p-3 mt-5 rounded-3 login'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='Your Password' required />
                </div>
                <p className='text-danger d-flex justify-content-center'>{error?.message}</p>
                <div className="mb-3 form-check d-flex justify-content-center">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="ms-2 form-check-label" htmlFor="exampleCheck1">I agree the terms and condition</label>
                </div>
                <p className='d-flex justify-content-center'>New in car.com? <Link to='/signup'>Create a new account</Link></p>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
            <div className='mt-3'>
                <button onClick={googleSignIn} className='btn btn-primary w-100'>Sign in with google</button>
                <br />
                <button onClick={facebookSignIn} className='btn btn-primary w-100 mt-3'>Sign in with facebook</button>
            </div>
        </div>
    );
};

export default Login;