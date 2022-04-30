import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, price, description, pastMileage, fuelType, cc, quantity, _id, supplierName } = product
    const navigate = useNavigate()
    const handleInventory = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className='shadow-lg m-3'>
            <div className=''>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <span>{pastMileage}</span>
                <span>{fuelType}</span>
                <span>{cc}</span>
                <p>Supplier : {supplierName}</p>
                <p>Quantity : {quantity}</p>
                <p>{description}</p>
            </div>
            <div>
                <h3>$ {price}</h3>
                <button onClick={handleInventory}>Update</button>
            </div>
        </div>
    );
};

export default Product;