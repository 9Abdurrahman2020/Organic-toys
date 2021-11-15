import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = ({review}) => {
    return (
        <div className="col-lg-3">
            <Card>
                <Card.Header>{review.reviewer}</Card.Header>
                <Card.Body>
                    <Card.Text style={{height:'100px',overflow:'auto'}}> 
                      {review.comments}
                    </Card.Text>
                    <Rating
                    style={{color:'#FFC200',marginBottom:'10px'}}
                    readonly
                    initialRating={review.rate}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />
                    <br />
                    <small>{review.email}</small>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;