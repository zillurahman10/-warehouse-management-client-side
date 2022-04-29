import React from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(email, password)

        console.log(email, password);
    }

    if (user) {
        navigate('/')
    }
    return (
        <div className='form-div'>
            <div className='d-flex justify-content-center mt-5'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <h2 className='text-center form-title'>Please Login</h2>
                    <input className='email-input' type="email" name="email" id="" placeholder='Email' />
                    <br />
                    <input className='password-input' type="password" name="password" id="" placeholder='Password' />
                    <br />
                    <input className='submit-button' type="submit" value="Login" />
                    <p className='text-center mt-3 form-link'>New in Car.com ? <Link className='text-decoration-none form-link' to='/signup'>Create a new account</Link></p>
                    <div className='text-center d-flex'>
                        <div style={{ border: '1px solid gray', height: '1px' }}>

                        </div>
                        <p>or</p>
                        <div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;