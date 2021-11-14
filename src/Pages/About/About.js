import React from 'react';
import { Container } from 'react-bootstrap';
import Map from '../Home/Map/Map';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <>
        <Header/>
        <Container>
            <h1 className="text-center my-5 text-warning">Organic Toys</h1>
            <hr />
            <p>We believe that childhood should be unplugged. It’s why we carry a beautiful array of organic toys for baby, toddler, and child that combine the safety of organic materials and the knowledge that the toys your child is playing with are healthy for them and the environment. By choosing organic toys for your child, you won’t have to wonder which dangerous man made chemical is lurking beneath the surface. Shop from our vast assortment of organic toys by brands such as Hazel Village, Kathe Kruse, and many more.</p>
        </Container>
        <Map/>
        </>
    );
};

export default About;