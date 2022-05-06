import React from 'react';
import './Homs.css'
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='content-area'>
                <Products></Products>
                <Brands></Brands>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;