import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-5 bg-dark'>
            <Container>
                <Row>
                    <Col className='text-light text-center' md={6} sm={12}>
                        <h4>Follow Us</h4>
                        <ul className='d-flex justify-content-center text-center list-unstyled gap-10'>
                            <li className='px-2'> <FaInstagram></FaInstagram></li>
                            <li className='px-2'><FaFacebook></FaFacebook></li>
                            <li className='px-2'><FaTwitter></FaTwitter></li>
                        </ul>
                    </Col>
                    <Col className='text-light text-center' md={6} sm={12}>
                        <h4>Important Link</h4>
                        <ul className=' text-center  list-unstyled gap-10'>
                            <li><Link className='text-decoration-none text-light'> Terms & Condition  </Link></li>
                            <li><Link className='text-decoration-none text-light'> Privacy Policy  </Link></li>
                        </ul>
                    </Col>
                </Row>

                <p className='text-light m-auto text-center py-4'>© 2023 Mr Chef, All Rights Reserved</p>
            </Container>
        </footer>
    );
};

export default Footer;