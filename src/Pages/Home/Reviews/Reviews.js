import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://sleepy-stream-84446.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container className="my-5">
            <h2>Reviews</h2>
            <Row className="g-4">
                {
                    [...reviews].reverse().slice(0, 4).map(review => <Review
                        review={review}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Reviews;