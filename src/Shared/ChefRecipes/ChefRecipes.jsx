import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {

    const chefInfo = useLoaderData()
    const {chef_name,num_recipes, chef_id,bio, chef_picture,years_of_experience, likes} = chefInfo;

    return (
        <div className='py-5'>
            <div className="chef_info mx-auto">
                <Container className='py-5 mx-auto d-flex align-items-center flex-column'>
                    <Row>
                        <Col md='8' sm='12 mx-auto text-center'>
                        <img style={{width:'80%', height: "400px", objectFit:'cover' }} src={chef_picture} alt="" />

                        <div className='chef-details py-5'>
                            <h2 className='text-dark'>{chef_name}</h2>
                            <p>{bio}</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ChefRecipes;