import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageInventoryTable = ({ product }) => {
    const { _id, name, price, quantity } = product
    const navigate = useNavigate()

    // Delete a product from manageInventory
    const handleDelete = id => {

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

    const handleInventory = () => {
        navigate(`/inventory/${_id}`)
    }
    return (


        <tbody>
            <tr>
                <th scope="row">{_id}</th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button>
                    <button className="btn btn-primary ms-2" onClick={handleInventory}>Update</button>
                </td>
            </tr>
        </tbody>
    );
};

export default ManageInventoryTable;