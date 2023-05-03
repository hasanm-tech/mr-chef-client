import React from 'react';
import { Button,Navbar,Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='bg-dark'>
            <Container>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Mr Chef </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">BLog</Nav.Link>
                        
                    </Nav>
                    <Nav className='align-items-center'>
                        <Nav.Link href="#">user</Nav.Link>
                        <Nav.Link  href="#">
                            <Button variant='dark'>Login</Button>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        </header>
    );
};

export default Header;