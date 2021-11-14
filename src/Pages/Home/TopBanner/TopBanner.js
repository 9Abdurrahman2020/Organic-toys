import React, { useEffect, useState } from 'react';
import { Button, Carousel, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://sleepy-stream-84446.herokuapp.com/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <>
            <Carousel style={{ height: '100vh' }}>
                {
                    toys.slice(0, 5).map(toy => <Carousel.Item interval={2000}>
                        <Row style={{ alignItems: 'center' }}>
                            <div className="col-md-6">
                                <img src={toy.img} className="w-75" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h2>{toy.title}</h2>
                                <p>{toy.des.slice(0, 250)}...</p>
                                <h4>Price: ${toy.price}.00</h4>
                                <Rating
                                    style={{ color: '#FFC200', marginBottom: '10px' }}
                                    readonly
                                    initialRating={toy.rate}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                />
                                <br />
                                <Link to={`/single-detail/${toy._id}`}><Button variant="danger">See Detail</Button></Link>
                            </div>
                        </Row>
                    </Carousel.Item>)
                }
            </Carousel>
        </>
    );
};

export default TopBanner;