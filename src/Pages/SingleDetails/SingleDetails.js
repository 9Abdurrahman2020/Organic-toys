import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link, useParams } from "react-router-dom";
import Header from '../Shared/Header/Header';

const SingleDetails = () => {
    const { id } = useParams();
    const [toy, setToy] = useState({});

    useEffect(() => {
        fetch(`https://sleepy-stream-84446.herokuapp.com/toys/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data);
            })
    }, [id])

    return (
        <>
            <Header />
            <Container className="py-3">
                <Row style={{ alignItems: 'center' }}>
                    <div className="col-md-6">
                        <img className="img-fluid" src={toy.img} alt="toy pic"></img>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-5">{toy.title}</h2>
                        <p>{toy.des}</p>
                        <Rating
                            style={{ color: '#FFC200', marginBottom: '10px' }}
                            readonly
                            initialRating={toy.rate}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        />
                        <h4>Price: ${toy.price}.00</h4>
                        <Link to={`/order/${toy._id}`}><Button className="btn btn-primary w-100 my-3">CheckOut</Button></Link>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default SingleDetails;