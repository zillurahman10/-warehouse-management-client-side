import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.value
        const confirmPassword = e.target.confirmPassword.value

        createUserWithEmailAndPassword(email, password)
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
            </form>
        </div>
    );
};

export default SignUp;