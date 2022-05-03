import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddItems = () => {
    const [name, setName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    console.log(name, imgUrl);
    const handleName = e => {
        setName(e.target.value)
    }
    const handleImgUrl = e => {
        setImgUrl(e.target.value)
    }
    const handleFormSubmit = e => {
        e.preventDefault()
        const product = { name, imgUrl }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'appilcation/json'
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
        <div>
            <h2>Add items</h2>
            <form onClick={handleFormSubmit}>
                <input onBlur={handleName} type="text" name='carname' placeholder='Car Name' required />
                <br />
                <input onBlur={handleImgUrl} type="text" name='imgurl' placeholder='Image URL' required />
                <br />
                <input type="submit" value="Add items" />
            </form>
        </div>
    );
};

export default AddItems;