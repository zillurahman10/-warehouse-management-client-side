import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-center text-light align-items-center mt-5'>Welcome to Car.com</h1>
                    <p className='text-light text-center'>We are for dealing car</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;