import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [errorElement, setErrorElement] = useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    // google Sign In
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    const navigate = useNavigate()
    if (loading) {
        return <h1>Loading...</h1>
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmpassword.value

        if (password !== confirmPassword) {
            return setErrorElement("Password did'nt")
        }


        await createUserWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://mysterious-forest-45427.herokuapp.com/inventory', { email })

        localStorage.setItem('accessToken', data.accessToken)
        Swal.fire(
            'Verify Email',
            'An email verification message sent in your emial',
            'success'
        )
        navigate(from, { replace: true });
    }

    const googleSignIn = () => {
        signInWithGoogle()
    }
    const facebookSignIn = () => {
        signInWithFacebook()
    }
    return (
        <div className='w-25 mx-auto shadow p-3 mt-5 rounded-3 login'>
            <h2 className='text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Name' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='Your Password' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confrim Password</label>
                    <input type="password" name='confirmpassword' className="form-control" id="exampleInputPassword1" placeholder='Confirm Your Password' required />
                </div>
                <p className='text-danger d-flex justify-content-center'>{error?.message || errorElement}</p>
                <div className="mb-3 form-check d-flex justify-content-center">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="ms-2 form-check-label" htmlFor="exampleCheck1">I agree the terms and condition</label>
                </div>
                <p className='d-flex justify-content-center'>Already have an account? <Link to='/login' className=' mx-1 text-decoration-none'>Login</Link></p>
                <button type="submit" className="submit w-100">Submit</button>
            </form>
            <div className='mt-3'>
                <button onClick={googleSignIn} className='btn btn-primary w-100'>Sign in with google</button>

            </div>
        </div>
    );
};

export default SignUp;