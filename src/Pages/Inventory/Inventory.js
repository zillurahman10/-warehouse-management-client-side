import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const [product, setProduct] = useState({})
    const [reload, setIsReload] = useState(true)
    const [againUpdatedQuantity, setAgainUpdatedQuantity] = useState(Number)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://mysterious-forest-45427.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
            })
    }, [id])
    const { name, img, price, description, pastMileage, fuelType, cc, quantity, _id, supplierName } = product

    useEffect(() => {
        setAgainUpdatedQuantity(quantity)
    }, [quantity])
    const handleDeliver = () => {
        const minus = againUpdatedQuantity - 1
        setAgainUpdatedQuantity(minus)

        const update = { againUpdatedQuantity, product }
        console.log(update);
        const url = `https://mysterious-forest-45427.herokuapp.com/inventory/${_id}`
        console.log(url);
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name: 'name' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('updated')
            })
        setIsReload(!reload)
    }

    const updateQuantity = e => {
        e.preventDefault()
        const inputQuantity = e.target.quantity.value
        console.log(inputQuantity);
        const plus = againUpdatedQuantity + parseInt(inputQuantity)
        console.log(quantity);
        setAgainUpdatedQuantity(plus)
        const update = { againUpdatedQuantity, product }
        const url = `https://mysterious-forest-45427.herokuapp.com/inventory/${_id}`
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
            })
        setIsReload(!reload)
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
                    <p>Quantity : {againUpdatedQuantity}</p>
                    <p>Supplier : {supplierName}</p>
                    <h5>Price : {price}</h5>
                    <div className='d-flex'>
                        <button className='btn btn-primary' onClick={handleDeliver}>Deliver</button>
                        <form onSubmit={updateQuantity} className='d-flex'>
                            <input className='mx-2 bg-none' style={{ width: '70px' }} type="number" name="quantity" id="" placeholder='Quantity' required />
                            <input className='btn btn-warning' type="submit" value="Restock" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
                <Link to='/manageinventory' className='btn btn-primary'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventory;