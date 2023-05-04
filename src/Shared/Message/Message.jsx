import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Message.css'
import signature from '../../assets/signature-1.png' 

const Message = () => {
    return (
        <div className='message'>
            <Container>
                <Row>
                    <Col md={6} sm={12} className='message-info'>
                    <p>MESSAGE FROM FOUNDER</p>
                    <h2>First, we eat. Then, we do everything else.
                    </h2>
                    <p className='py-2'>we believe that food is more than just sustenance – it's the foundation for a great life. That's why we make every meal a special occasion, a chance to slow down and savor the moment.
                    Eating isn't just a physical act – it's a chance to connect with others, to share stories and experiences, and to nourish our souls as well as our bodies.
                    Our goal is to create a space where people can come together over a delicious meal, relax, and enjoy each other's company. Because at the end of the day, isn't that what life is all about?</p>

                    <img src={signature} alt="" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Message;