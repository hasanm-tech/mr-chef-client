import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='py-5 banner'>
            <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                    <div className='py-5 banner-info'>
                        <h2>Your  <br />
                            Favorite <br />
                            Recipes
                        </h2>
                        <p>Your Favorite meals that everyone loves </p>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Banner;