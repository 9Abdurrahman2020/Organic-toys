import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://sleepy-stream-84446.herokuapp.com/toys')
            .then(res => res.json())
            .then(data => {
                setProducts(data)              
            })
    }, [])

    return (
        <Container>
            
            <h2>Our Products</h2>
            <Row className="g-4">
                {
                    [...products].reverse().slice(0, 6).map(toy => <Product
                        key={toy._id}
                        toy={toy}
                    />)
                }
            </Row>
            <Link to="/toys"><button className="btn btn-success my-3">See All Toys</button></Link>
        </Container>
    );
};

export default Products;