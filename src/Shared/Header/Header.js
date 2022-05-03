import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
// import { MenuIcon, XIcon } from '@heroicons/react/solid' 

const Header = () => {
    // const [open, setOpen] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div className='mt-2 d-flex justify-content-between container header'>
            <div>
                <Link to='/'>
                    <img className='w-75' src={logo} alt="" />
                </Link>
            </div>
            <div className='mt-4 links d-flex'>
                <Link className='mx-4 text-decoration-none' to='/'>HOME</Link>
                <Link className='mx-4 text-decoration-none' to='/blogs'>BLOGS</Link>
                <div>
                    {
                        user ? <div>
                            <Link className='mx-4 text-decoration-none' to='/manageinventory'>MANAGE INVENTORY</Link>
                            <Link className='mx-4 text-decoration-none' to='additems'>ADD ITEM</Link>
                            <Link className='mx-4 text-decoration-none' to='/myitems'>MY ITEMS</Link>
                            <button onClick={logOut}>Sign Out</button>
                        </div> : <Link className='mx-4 text-decoration-none' to='/login'>LOGIN</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;