import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='mt-2 d-flex justify-content-between container header'>
            <div>
                <Link to='/'>
                    <img className='w-75' src={logo} alt="" />
                </Link>
            </div>
            <div className={`mt-4 links`}>
                <Link className='mx-4 text-decoration-none' to='/'>HOME</Link>
                <Link className='mx-4 text-decoration-none' to='/inventory'>INVERTORY</Link>
                <Link className='mx-4 text-decoration-none' to='/blogs'>BLOGS</Link>
                <Link className='mx-4 text-decoration-none' to='/login'>LOGIN</Link>
            </div>
            <div onClick={() => setOpen(!open)} className='heroIcon' style={{ width: '50px', height: '50px' }}>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
        </div>
    );
};

export default Header;