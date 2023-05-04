import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './ChefCard.css'
import { Link } from 'react-router-dom';


const ChefCard = ({c}) => {

        const {chef_name,num_recipes, chef_id, chef_picture,years_of_experience, likes} = c;
    return (
        <Row>
            <Col className='single-card'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title style={{fontSize:"26px", fontWeight:'600'}}>{chef_name}</Card.Title>
                    <div className="py-4 card-info d-flex justify-content-center align-items-center">
                    <ul className='m-0 p-0'>
                        <li className='list-unstyled'> No of Recipes :{num_recipes}</li>
                        <li className='list-unstyled'>Years of Experience {years_of_experience}</li>
                    </ul>
                    <ul className='m-0 p-0 text-left'>
                        <li className='list-unstyled likes'> <Button variant='danger'>likes {likes}</Button> </li>
                    </ul>
                    </div>
                    <Button className='my-2' variant="danger">
                        <Link to={`/chef/${chef_id}`}> View Recipes </Link>
                    </Button>
                </Card.Body>
        </Card>
            </Col>
        </Row>
    );
};

export default ChefCard;