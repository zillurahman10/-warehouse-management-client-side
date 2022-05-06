import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const [product, setProduct] = useState({})
    const [productQuantity, setProductQuantity] = useState(Number)
    const [reload, setIsReload] = useState(true)
    const [increaseQuantity, setIncreaseQuantity] = useState(Number)
    const [updatedQuantity, setUpdatedQuantity] = useState(Number)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { name, img, price, description, pastMileage, fuelType, cc, quantity, _id, supplierName } = product


    const handleDeliver = () => {
        const minusQuantity = quantity - 1
        const update = { minusQuantity, product }
        const url = `http://localhost:5000/inventory/${_id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('updated')
                setProductQuantity(minusQuantity)
            })
        setIsReload(!reload)
    }

    console.log(quantity);
    console.log(productQuantity);
    const handleQuantity = e => {
        setIncreaseQuantity(e.target.value)
    }
    const updateQuantity = e => {
        e.preventDefault()
        const plusQuantity = quantity + increaseQuantity
        const update = { plusQuantity, product }
        const url = `http://localhost:5000/inventory/${_id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('updated')
                setUpdatedQuantity(plusQuantity)
            })
        setIsReload(!reload)
    }
    console.log(updatedQuantity);
    return (
        <div>
            <div className='d-flex justify-content-center mt-5 shadow-lg mx-auto p-5 rounded-3' style={{ width: '800px' }}>
                <div className='me-5'>
                    <img className='rounded-3' src={img} alt="" />
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>Quantity : {updatedQuantity || productQuantity || quantity}</p>
                    <p>Supplier : {supplierName}</p>
                    <h5>Price : {price}</h5>
                    <button onClick={handleDeliver}>Update</button>
                </div>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
                <Link to='/manageinventory' className='btn btn-primary'>Manage Inventories</Link>
            </div>
            <div>
                <form onSubmit={updateQuantity}>
                    <input onBlur={handleQuantity} type="number" name="quantity" id="" placeholder='Product Quantity' required />
                    <br />
                    <input type="submit" value="increase" />
                </form>
            </div>
        </div>
    );
};

export default Inventory;