import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import DashProduct from './DashProduct/DashProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [ dataLoading, setDataLoading ] = useState(true)

    useEffect(() => {
        fetch('https://sleepy-stream-84446.herokuapp.com/toys')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDataLoading(false)
            })
    }, [products])
    return (
        <div>
            <Row>
            {
                dataLoading && <div className="text-center my-5"><Spinner animation="border" variant="primary" /></div>
            }
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