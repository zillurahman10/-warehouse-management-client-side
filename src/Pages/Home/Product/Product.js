import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
import { faRoad, faGasPump, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ product }) => {
    const { name, img, price, description, pastMileage, fuelType, cc, quantity, _id, supplierName } = product
    const navigate = useNavigate()
    const handleInventory = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div data-aos="zoom-in" className='shadow-lg m-3 product-card'>
            <div>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div>
                <h4 className='mt-3'>{name}</h4>
                <FontAwesomeIcon className='mx-2' icon={faRoad}></FontAwesomeIcon>
                <span>{pastMileage}</span>
                <FontAwesomeIcon className='mx-2' icon={faGasPump}></FontAwesomeIcon>
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