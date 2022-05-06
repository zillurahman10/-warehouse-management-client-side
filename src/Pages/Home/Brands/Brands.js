import React, { useEffect, useState } from 'react'; import './Brands.css'
import Brand from '../Brand/Brand';

const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className='my-5 container'>
            <h1 className='text-center'>Our brands</h1>
            <div className=' brand-cotainer'>
                {
                    brands.map(brand => <Brand
                        key={brand._id}
                        brand={brand}
                    ></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;