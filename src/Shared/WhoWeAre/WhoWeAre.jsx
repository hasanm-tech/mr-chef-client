import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import one from '../../assets/one.jpg'
import two from '../../assets/two.jpg'
import three from '../../assets/three.png'
import './Who.css'

const WhoWeAre = () => {
    return (
        <Container className='py-5 mx-auto text-center' >
            <h2 className='text-dark'>Who We Are</h2>
            <Row className='py-5'> 
                <Col md='4' col='12'className='who'>
                    <img  className='w-100'  src={one} alt="" />
                    <div className="info py-4">
                    <h2>Fresh Taste </h2>
                        <p>we believe that fresh food is the key to great taste and good health. That's why we use only the freshest ingredients in our dishes, carefully selected from local farms and markets.

                        Our commitment to fresh food means that you can always expect delicious, healthy meals at our restaurant. From crisp salads to savory entrees, every dish is made with the highest-quality ingredients and prepared with care by our skilled chefs.</p>
                    </div>
                </Col>

                <Col md='4' col='12'className='who'>
                    <img  className='w-100' src={two} alt="" />
                    <div className="info py-4">
                    <h2>Made with Love</h2>
                        <p>Every dish on our menu is made with love, from the freshest ingredients and the most authentic recipes.
                        Our chefs pour their hearts into every dish they create, ensuring that every bite is a celebration of flavor and passion. we believe that food is love, and we put that belief into every meal we serve.
                        You can taste the love in every bite of our delicious, homemade dishes..</p>
                    </div>
                </Col>

                <Col md='4' col='12' className='who'>
                    <img className='w-100'  src={three} alt="" />
                    <div className="info py-4">
                    <h2>Taste  The Difference</h2>
                        <p>Come taste the difference at [restaurant name], where every dish is a unique and unforgettable experience.
                        We believe that our commitment to quality and flavor sets us apart from other restaurants, and we invite you to come taste the difference for yourself.
                        Our ingredients are carefully selected for their freshness and flavor, ensuring that every dish we serve is one-of-a-kind.
                        We're not your average restaurant – our dedication to quality and creativity means that every meal is an adventure. Come in and test the difference today!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WhoWeAre;