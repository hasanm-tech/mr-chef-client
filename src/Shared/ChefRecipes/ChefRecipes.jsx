import React, { useState } from 'react';
import { Col, Container, Row, Button, CardGroup, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import { BsStarFill,BsStar } from "react-icons/bs";
import Rating from 'react-rating';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ChefRecipes.css'

const ChefRecipes = () => {

    const chefInfo = useLoaderData()
    const {chef_name,num_recipes, chef_id,bio, chef_picture,years_of_experience, likes,recipes} = chefInfo;

    

    const [accepted, setAccept] =  useState(false)
    const [accepted1, setAccept1] = useState(false)
    const [accepted2, setAccept2] = useState(false)

    const handleLike = () => {
            setAccept(true)
            toast("loved your recipe !")
        
    }

        const handleLike1 = () => {
            setAccept1(true)
            toast("Wow added your recipe!")
        
    }
    
    const handleLike2 = () => {
        setAccept2(true)
        toast("added your fev recipe!")

    }

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
                            
                            <div className="py-4 card-info d-flex justify-content-center align-items-center">
                            <ul className='m-0 p-0'>
                                <li className='list-unstyled'> No of Recipes :{num_recipes}</li>
                                <li className='list-unstyled'>Years of Experience {years_of_experience}</li>
                            </ul>
                            <ul className='m-0 p-0 text-left'>
                                <li className='list-unstyled likes'> <Button variant='danger'>likes {likes}</Button> </li>
                            </ul>
                            </div>


                        </div>
                        </Col>
                    </Row>
                    <div className="recipes py-3">

                            <h1 className='py-5'>Recipes  Of Chinese Food  </h1>

                            <CardGroup>
                                <Card>
                                <Card.Img variant="top" src={recipes[0]?.img} />
                                    <Card.Body >
                                        
                                    <Card.Title className='py-4'> {recipes[0]?.name} </Card.Title>
                                    <Card.Text className='py-4'>
                                    <b>ingredients</b> <br />
                                    {recipes[0]?.ingredients} 
                                    </Card.Text>

                                    <Card.Text className='py-4' style={{height:'400px'}}>
                                    <b>cooking method </b> <br />
                                    {recipes[0]?.method} 
                                    </Card.Text>
                                    
                                    </Card.Body>
                                    <Card.Footer>
                                    <div className="recipes-info d-flex align-items-center justify-content-between">
                                    <p className='p-0 m-0'>
                                        <Rating
                                        initialRating={recipes[0]?.rating}
                                        readonly
                                        placeholderSymbol={<BsStarFill></BsStarFill>}
                                        emptySymbol={<BsStar></BsStar>}
                                        fullSymbol={<BsStarFill></BsStarFill>}
                                        >
                                        </Rating>
                                        <span className='px-2'> {recipes[0]?.rating}</span>
                                    </p>
                                    <button disabled={accepted} onClick={handleLike}>
                                         <FaBookmark   className='text-danger'> </FaBookmark>
                                        </button>
                                    </div>
                                    </Card.Footer>
                                </Card>


                                <Card>
                                <Card.Img variant="top" src={recipes[1]?.img} />
                                    <Card.Body >
                                        
                                    <Card.Title className='py-4'> {recipes[1]?.name} </Card.Title>
                                    <Card.Text className='py-4'>
                                    <b>ingredients</b> <br />
                                    {recipes[1]?.ingredients} 
                                    </Card.Text>

                                    <Card.Text className='py-4' style={{height:'400px'}}>
                                    <b>cooking method </b> <br />
                                    {recipes[1]?.method} 
                                    </Card.Text>
                                    
                                    </Card.Body>
                                    <Card.Footer>
                                    <div className="recipes-info d-flex align-items-center justify-content-between">
                                    <p className='p-0 m-0'>
                                        <Rating
                                        initialRating={recipes[1]?.rating}
                                        readonly
                                        placeholderSymbol={<BsStarFill></BsStarFill>}
                                        emptySymbol={<BsStar></BsStar>}
                                        fullSymbol={<BsStarFill></BsStarFill>}
                                        >
                                        </Rating>
                                        <span className='px-2'> {recipes[1]?.rating}</span>
                                    </p>
                                    <button disabled={accepted1} onClick={handleLike1}>
                                         <FaBookmark   className='text-danger'> </FaBookmark>
                                        </button>
                                    </div>
                                    </Card.Footer>
                                </Card>


                                <Card>
                                <Card.Img variant="top" src={recipes[2]?.img} />
                                    <Card.Body>
                                        
                                    <Card.Title className='py-4'> {recipes[2]?.name} </Card.Title>
                                    <Card.Text className='py-4'>
                                    <b>ingredients</b> <br />
                                    {recipes[2]?.ingredients} 
                                    </Card.Text>

                                    <Card.Text className='py-4' style={{height:'400px'}}>
                                    <b>cooking method </b> <br />
                                    {recipes[2]?.method} 
                                    </Card.Text>
                                    </Card.Body>
                                    

                                    <Card.Footer>
                                        <div className="recipes-info d-flex align-items-center justify-content-between">
                                        <p className='p-0 m-0'>
                                            <Rating
                                            initialRating={recipes[2]?.rating}
                                            readonly
                                            placeholderSymbol={<BsStarFill></BsStarFill>}
                                            emptySymbol={<BsStar></BsStar>}
                                            fullSymbol={<BsStarFill></BsStarFill>}
                                            >
                                            </Rating>
                                            <span className='px-2'> {recipes[2]?.rating}</span>
                                        </p>

                                        <button disabled={accepted2} onClick={handleLike2}>
                                         <FaBookmark   className='text-danger'> </FaBookmark>
                                        </button>
                                        </div>
                                    </Card.Footer>
                                </Card>


                                        



                            </CardGroup>


                        </div>
                </Container>
            </div>
        </div>
    );
};

export default ChefRecipes;