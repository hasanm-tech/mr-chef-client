import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { Col, Container, Row } from 'react-bootstrap';
import './Chef.css'


const Chef = () => {

    const [chef, setChef] = useState([])

    useEffect(()=> {
        fetch('https://mr-chef-server-hasanm-tech.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChef(data))
    }, [])

    return (

        <div className="chef">
            <Container className='py-5'>
            <Row className='py-5 text-center'>
                <h2 className='text-dark'> Our Chef </h2>
                <Col className='py-5'>
                    <div className='card-chef'>
                        {
                            chef.map(c => <ChefCard key={c.chef_name} c={c} ></ChefCard>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Chef;