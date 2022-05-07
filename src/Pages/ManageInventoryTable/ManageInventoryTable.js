import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageInventoryTable = ({ product }) => {
    const { _id, name, price, quantity } = product

    // Delete a product from manageInventory
    const handleDelete = id => {
        // const [products, setProducts] = useState([])

        // useEffect(() => {
        //     fetch('http://localhost:5000/products')
        //         .then(res => res.json())
        //         .then(data => setProducts(data))
        // }, [])

        const confirm = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

        if (confirm) {
            console.log('Deleting item', id);
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // if (data.deletedCount > 0) {
                    //     const remaining = products.filter(product = product._id !== id)
                    //     setProducts(remaining)
                    // }
                })
        }
    }
    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{_id}</th>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventoryTable;