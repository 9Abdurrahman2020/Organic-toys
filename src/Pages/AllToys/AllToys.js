import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Home/Products/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllToys = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://sleepy-stream-84446.herokuapp.com/toys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <Header />
            <Row className="g-4">
                {
                    products.map(toy => <Product
                        key={toy._id}
                        toy={toy}
                    />)
                }
            </Row>
            <Footer />
        </>
    );
};

export default AllToys;