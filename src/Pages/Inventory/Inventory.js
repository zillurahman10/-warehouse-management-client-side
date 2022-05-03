import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { name, img, price, description, pastMileage, fuelType, cc, quantity, _id, supplierName } = product
    const [productQuantity, setProductQuantity] = useState()
    console.log(quantity);


    const handleDeliver = () => {
        const count = (parseInt(quantity - 1))
        const update = { count, product }
        const url = `http://localhost:5000/inventory/${_id}`
        console.log(url);
        fetch(url, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(parseInt(data?.count));
                alert('updated')
                setProductQuantity(parseInt(data?.count))
            })
        console.log(productQuantity);
    }
    return (
        <div>
            <div className='d-flex justify-content-center mt-5 shadow-lg mx-auto p-5 rounded-3' style={{ width: '800px' }}>
                <div className='me-5'>
                    <img className='rounded-3' src={img} alt="" />
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>Quantity : {productQuantity}</p>
                    <p>Supplier : {supplierName}</p>
                    <h5>Price : {price}</h5>
                    <button onClick={handleDeliver}>Update</button>
                </div>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
                <Link to='/manageinventory' className='btn btn-primary'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventory;