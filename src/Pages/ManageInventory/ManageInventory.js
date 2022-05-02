import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageInventoryTable from '../ManageInventoryTable/ManageInventoryTable';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // const s = [
    //     {
    //         name: '2020 Camz Ferrari Portofino M',
    //         img: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/07/fe1-355x230.jpg',
    //         description: '',
    //         price: 0,
    //         quantity: 0,
    //         supplierName: '',
    //         pastMileage: '',
    //         fuelType: '',
    //         cc: ''
    //     },
    //     {
    //         name: '2019 Adx Alfa Romeo Giulia GTA',
    //         img: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/07/g0-355x230.jpg',
    //         description: '',
    //         price: '78,000',
    //         quantity: 0,
    //         supplierName: '',
    //         pastMileage: '50,000 (Mi)',
    //         fuelType: 'Hybrid',
    //         cc: '1995 (Cc)'
    //     },
    //     {
    //         name: '2020 Altra Benz C-Class Sedan',
    //         img: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/07/2019_mercedes-benz_a-class_sedan_a-220_f_oem_1_1600-355x230.jpg',
    //         description: '',
    //         price: '24,000',
    //         quantity: 0,
    //         supplierName: '',
    //         pastMileage: '1,300 (Mi)',
    //         fuelType: 'Hybrid',
    //         cc: '1800 (Cc)'
    //     },
    //     {
    //         name: '2017 Audi A4 1.4 TFSI',
    //         img: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/04/blue4-355x230.jpg',
    //         description: '',
    //         price: '45,000',
    //         quantity: 0,
    //         supplierName: '',
    //         pastMileage: '17,000 (Mi)',
    //         fuelType: 'Ethanol',
    //         cc: '1499 (Cc)'
    //     },
    //     {
    //         name: '2020 Kia Telluride',
    //         img: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/maxresdefault-355x230.jpg',
    //         description: '',
    //         price: '79,000',
    //         quantity: 0,
    //         supplierName: '',
    //         pastMileage: '1,000 (Mi)',
    //         fuelType: 'Diesel',
    //         cc: '2499 (Cc)'
    //     },
    //     {
    //         name: '2019 Ford Focus ST',
    //         img: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/2019-Ford-Focus-ST-Orange-Fury-10-850x567-1-355x230.jpg',
    //         description: '',
    //         price: '32,000',
    //         quantity: 0,
    //         supplierName: '',
    //         pastMileage: '14,752 (Mi)',
    //         fuelType: 'Fuel',
    //         cc: '1799 (Cc)'
    //     },
    //     {
    //         name: '2017 Audi A8 3.0 TFSI Quattro',
    //         img: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/1paNruoAncU0-355x230.jpg',
    //         description: '',
    //         price: 0,
    //         quantity: '75,800',
    //         supplierName: '',
    //         pastMileage: '22,000 (Mi)',
    //         fuelType: 'Electric',
    //         cc: '1399 (Cc)'
    //     },
    //     {
    //         name: '2017 Chevrolet Equinox',
    //         img: 'https://listing.maxwheelswp.com/wp-content/uploads/2021/03/1-2020-chevrolet-equinox-355x230.jpg',
    //         description: '',
    //         price: '57,000',
    //         quantity: 0,
    //         supplierName: '',
    //         pastMileage: '13,000 (Mi)',
    //         fuelType: 'Hybrid',
    //         cc: '1399 (Cc)'
    //     }
    // ]
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