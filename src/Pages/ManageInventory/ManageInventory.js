import React, { useEffect, useState } from 'react';
import ManageInventoryTable from '../ManageInventoryTable/ManageInventoryTable';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container mt-5'>
            {
                products.map(product => <ManageInventoryTable
                    key={product._id}
                    product={product}
                ></ManageInventoryTable>)
            }
        </div>
    );
};

export default ManageInventory;