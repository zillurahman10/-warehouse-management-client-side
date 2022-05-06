import React from 'react';
import { Card } from 'react-bootstrap';

const Brand = ({ brand }) => {
    const { name, img } = brand
    return (
        <div className='card' style={{ margin: '20px' }}>
            <div style={{ height: '200px' }}>
                <div>
                    <img style={{ width: '100px', marginLeft: '35px' }} src={img} alt="" />
                </div>
                <div className='w-100'>
                    <Card.Footer className="text-muted">{name}</Card.Footer>
                </div>
            </div>
        </div>
    );
};

export default Brand;