import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DashProduct from './DashProduct/DashProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://sleepy-stream-84446.herokuapp.com/toys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            <Row>
                {
                    products.map(product => <DashProduct
                        key={product._id}
                        product={product}
                    />)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;