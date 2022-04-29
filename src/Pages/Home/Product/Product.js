import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, price, description, pastMileage, fuelType, cc, quantity } = product
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className='card-container m-3'>
            <div className=''>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <span>{pastMileage}</span>
                <span>{fuelType}</span>
                <span>{cc}</span>
                <p>Quantity : {quantity}</p>
                <p>{description}</p>
            </div>
            <div>
                <h3>$ {price}</h3>
                <button>Update</button>
            </div>
        </div>
    );
};

export default Product;