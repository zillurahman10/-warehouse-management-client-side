import React from 'react';

const Myitem = ({ product }) => {
    console.log(product);
    const { img, name, price, quantity, supplier } = product
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Myitem;