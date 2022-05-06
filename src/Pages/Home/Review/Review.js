import React from 'react';

const Review = ({ personReview }) => {
    const { name, review } = personReview
    return (
        <div data-aos="flip-up" data-aos-duration="1000" className='card m-3 p-3'>
            <div>
                <h5>{name}</h5>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;