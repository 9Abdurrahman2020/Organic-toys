import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = ({toy}) => {
    return (
        <div className="col-md-6 col-lg-4">
            <Card>
                <Card.Img variant="top" src={toy.img} style={{margin:'0px auto'}} />
                <Card.Body className="text-center">
                    <Card.Title>{toy.title.slice(0,25)}...</Card.Title>
                    <h6>Price: ${toy.price}.00</h6>
                    <Rating
                    style={{color:'#FFC200',marginBottom:'10px'}}
                    readonly
                    initialRating={toy.rate}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />
                    <br />
                    <Link to={`/single-detail/${toy._id}`}><Button variant="danger">See Detail</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;