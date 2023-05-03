import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login'>
        <Container>
        <Row>
            <Col md={6} sm={12} className='mx-auto my-5'>
                <div className="log-info my-5">
                <div className="text-center">
                            <h2 className='text-dark fw-bold'>Please Register </h2>
                        </div>
                    <Form>
                       <div>
                            <label htmlFor=""name='name'>Name</label> <br />
                            <input type="text" placeholder='Enter your name ' />
                       </div>

                       <div>
                            <label htmlFor="">Photo Url </label> <br />
                            <input type="text" name='photo' placeholder='Enter your photo url ' />
                       </div>

                       <div>
                            <label htmlFor="" >PassWord</label> <br />
                            <input type="password" name='pass'  placeholder='Enter your Password ' />
                       </div>

                       <Button variant='dark' className='my-2'>Register</Button>

                       <div className="py-5 sign-btn">
                            <Button variant='danger'>Google Sign In</Button> <br />
                            <Button variant='dark'>Github  Sign In</Button>
                       </div>
                        
                        <div className='redirect'>
                            <p style={{fontWeight:'500'}}>New to the website,  go to <Link  to='/login'>Login</Link></p>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
    );
};

export default Register;