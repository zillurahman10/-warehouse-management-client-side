import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Myitem from '../Myitem/Myitem';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email
            const url = `https://mysterious-forest-45427.herokuapp.com/myitems?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setProducts(data)
        }
        getMyItems()
    }, [user])
    if (loading) {
        return <Loading></Loading>
    }
    console.log(products);

    return (
        <div>
            <h1 className='mt-5 text-center'>This is my item : {products?.length}</h1>
            {
                products.map(product => <Myitem
                    key={product._id}
                    product={product}
                ></Myitem>)
            }
        </div>
    );
};

export default MyItems;