import React, { useEffect, useState } from 'react';
import './Reviews.css'
import Review from '../Review/Review';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mysterious-forest-45427.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const reviewPost = e => {
        e.preventDefault()
        const name = e.target.name.value
        const review = e.target.review.value

        const fullReview = { name, review }

        fetch('https://mysterious-forest-45427.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(fullReview)
        })
            .then(res => res.json())
            .then(data => {
                const postReview = [...reviews, fullReview]
                Swal.fire(
                    'Posted',
                    'Your review is successfully posted'
                )
                setReviews(postReview)
                console.log(data);
            })

    }
    return (
        <div className='my-5'>
            <h2 className='text-center mb-4'>Our Reviews</h2>
            <div className='reviews container'>
                {
                    reviews.map(personReview => <Review
                        key={personReview._id}
                        personReview={personReview}
                    ></Review>)
                }
            </div>
            <h4 className='text-center my-5'>Post your review</h4>
            <form onSubmit={reviewPost} className='w-25 mx-auto'>
                <input className='form-control col-sm-12' name='name' type="text" placeholder='Your Name' />
                <br />
                <textarea name="review" id="review" cols="10" rows="5" className='form-control' placeholder='Write your review'></textarea>
                <br />
                <input type="submit" value="Post" className='btn btn-primary' />
            </form>
        </div>
    );
};

export default Reviews;