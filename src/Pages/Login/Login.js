import React from 'react';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading';
import Swal from 'sweetalert2';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()
    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email })

        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
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
    }

    const googleSignIn = () => {
        signInWithGoogle()
    }
    const facebookSignIn = () => {
        signInWithFacebook()
    }
    const passwordReset = async () => {
        const { value: email } = await Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputLabel: 'Your email address',
            inputPlaceholder: 'Enter your email address'
        })

        if (email) {
            Swal.fire(`An verification message sent in this ${email} email`)
            sendPasswordResetEmail(email)
        }
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
                <p className='d-flex justify-content-center'>New in car.com? <Link to='/signup' className='text-decoration-none mx-1'>Create a new account</Link></p>
                <p className='text-center'>Forget password? <button className='reset-button text-primary' onClick={passwordReset}>Reset password</button></p>
                <div className="mb-3 form-check d-flex justify-content-center">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="ms-2 form-check-label" htmlFor="exampleCheck1">I agree the terms and condition</label>
                </div>
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