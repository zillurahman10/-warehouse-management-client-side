import React from 'react';
import './Homs.css'
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='content-area'>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;