import React, { useContext } from 'react';
import { Navbar,Nav, Container,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Header.css'

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => {
            console.error(error)
        })
    }

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
                    
                    {
                    user ?
                    <div className='user'> <Image title={user.displayName} roundedCircle className='userImg' src={user.photoURL ? user.photoURL : ''} alt="" /> <button className='user-btn'> <Link onClick={handleLogOut}> Logout </Link></button></div> :
                    <button className='user-btn'> <Link to='/login'>Login </Link> </button>
                    } 
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        </header>
    );
};

export default Header;