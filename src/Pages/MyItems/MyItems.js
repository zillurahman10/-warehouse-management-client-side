import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email
            const url = `http://localhost:5000/myitems?email=${email}`
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


    return (
        <div>
            <h1 className='mt-5 text-center'>This is my item : {products?.length}</h1>
        </div>
    );
};

export default MyItems;