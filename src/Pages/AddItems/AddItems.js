import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddItems = () => {
    const [name, setName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [pastMileage, setPastMileage] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [engineCapacity, setEngineCapacity] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState(Number)
    const [supplierName, setSupplierName] = useState("")
    const [description, setDescription] = useState("")
    const handleName = e => {
        setName(e.target.value)
    }
    const handleImgUrl = e => {
        setImgUrl(e.target.value)
    }
    const handlePastMileage = e => {
        setPastMileage(e.target.value)
    }
    const handleFuelType = e => {
        setFuelType(e.target.value)
    }
    const handleEngineCapacity = e => {
        setEngineCapacity(e.target.value)
    }
    const handleSupplierName = e => {
        setSupplierName(e.target.value)
    }
    const handlePrice = e => {
        setPrice(e.target.value)
    }
    const handleQuantity = e => {
        setQuantity(e.target.value)
    }
    const handleDescription = e => {
        setDescription(e.target.value)
    }
    const handleFormSubmit = e => {
        e.preventDefault()
        const product = { name, imgUrl, pastMileage, fuelType, engineCapacity, price, quantity, supplierName, description }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        // toast('Successfull', {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
    }
    return (
        <div className='w-50 mx-auto shadow p-2 mt-2'>
            <h2 className='text-center'>Add Car</h2>
            <div className='container'>
                <form onSubmit={handleFormSubmit} className="row g-3">
                    <div className="col-sm-12 col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Car Name</label>
                        <input onBlur={handleName} type="name" className="form-control" required placeholder='Car Name' />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label htmlFor="inputPassword4" className="form-label">Car Past Mileage</label>
                        <input onBlur={handlePastMileage} type="text" className="form-control" placeholder='Car Past Mileage' required />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label htmlFor="inputAddress" className="form-label">Car Fuel Type</label>
                        <input onBlur={handleFuelType} type="text" className="form-control" id="inputAddress" placeholder="Car Fuel Type" required />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label htmlFor="inputAddress2" className="form-label">Car Engine Capacity</label>
                        <input onBlur={handleEngineCapacity} type="text" className="form-control" id="inputAddress2" placeholder="Car CC" required />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label htmlFor="inputCity" className="form-label">Supplier Name</label>
                        <input onBlur={handleSupplierName} type="text" className="form-control" id="inputCity" placeholder='Supplier Name' required />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label htmlFor="inputState" className="form-label">Quantity</label>
                        <input onBlur={handleQuantity} type="number" className='form-control' name="number" id="number" placeholder='Quantity' required />
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label htmlFor="inputZip" className="form-label">Price</label>
                        <input onBlur={handlePrice} type="text" className="form-control" id="inputZip" placeholder='Price' required />
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <label htmlFor="imgUrl" className='form-label'>Image URL</label>
                        <input onBlur={handleImgUrl} type="text" name="imgUrl" id="imgUrl" className='form-control' placeholder='Image URL' required />
                    </div>
                    <div>
                        <label htmlFor="description" className='form-label'>Short description</label>
                        <textarea onBlur={handleDescription} className='form-control' name="description" id="description" required ></textarea>
                    </div>
                    <div className="col-sm-12 col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;