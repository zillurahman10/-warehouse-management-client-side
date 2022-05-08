import React, { useEffect, useState } from 'react';
import './ManageInventory.css'
import ManageInventoryTable from '../ManageInventoryTable/ManageInventoryTable';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container-fluid container mt-5'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    products.map(product => <ManageInventoryTable
                        key={product._id}
                        product={product}
                    ></ManageInventoryTable>)
                }
            </table>


        </div>
    );
};

export default ManageInventory;