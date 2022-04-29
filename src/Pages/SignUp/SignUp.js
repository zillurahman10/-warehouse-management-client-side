import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value

        createUserWithEmailAndPassword(email, password)

        console.log(name);
        console.log(email);
        console.log(password);
        console.log(confirmPassword);

    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Please Sing Up</h2>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email' />
                <br />
                <input type="password" name="password" id="" placeholder='Password' />
                <br />
                <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' />
                <br />
                <input type="submit" value="Sign Up" />
                <p>Already have an account ? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;