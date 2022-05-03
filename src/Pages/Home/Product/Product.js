import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
import { faRoad, faGasPump } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import engineIcon from '../../../images/engineIcon.png'

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
                <FontAwesomeIcon className='mx-1' icon={faRoad}></FontAwesomeIcon>
                <span className='me-2 mt-3'>{pastMileage}</span>
                <FontAwesomeIcon className='mx-1' icon={faGasPump}></FontAwesomeIcon>
                <span>{fuelType}</span>
                <img className='engineIcon' src={engineIcon} alt="" />
                <span>{cc}</span>
                <p className='mt-3'>Supplier : {supplierName}</p>
                <p>Quantity : {quantity}</p>
                <p>{description}</p>
            </div>
            <div>
                <h5>$ {price}</h5>
                <button className='update-button' onClick={handleInventory}>Update</button>
            </div>
        </div>
    );
};

export default Product;