import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../../Provider/AuthProvider';
import {Link } from 'react-router-dom';
import './Login.css'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';




const Login = () => {

    const {userLogIn,auth} = useContext(AuthContext)
      const [error, setError] = useState(null)
      const [success, setSuccess] = useState(null)
      
    const provider = new GoogleAuthProvider();
    const userProvider = new GithubAuthProvider();
  

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        form.reset()

        userLogIn(email,pass)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('user login successful')
            setError('')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
     }

     const handleGoogleSignIn = () => {
        return signInWithPopup(auth,provider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setSuccess('user login successful')
            setError('')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    } 


    const handleGithubSign = () => {
        return signInWithPopup(auth,userProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setSuccess('user login successful')
            setError('')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    return (
        <div className='login'>
            <Container>
            <Row>
                <Col md={6} sm={12} className='mx-auto my-5'>
                    <div className="log-info my-5">
                        <div className="text-center">
                            <h2 className='text-dark fw-bold'>Please Login </h2>
                        </div>
                        <form onSubmit={handleLogin}>
                           <div>
                                <label htmlFor="">email</label> <br />
                                <input type="text" required name='email' placeholder='Enter your name ' />
                           </div>
                           <div>
                                <label htmlFor="">PassWord</label> <br />
                                <input type="password" required name='pass' placeholder='Enter your Password ' />
                           </div>

                           <button variant='dark' className='my-2'>Login</button>

                           <div className="py-5 sign-btn">
                                <Button onClick={handleGoogleSignIn} variant='danger'>Google Sign In</Button> <br />
                                <Button onClick={handleGithubSign} variant='dark'>Github  Sign In</Button>
                           </div>
                            
                            <div className='redirect'>
                                <p style={{fontWeight:'500'}}>New to the website,  go to <Link  to='/register'>Register</Link></p>
                                <br /><br />

                            <p className='fw-bold text-danger'>{error}</p>
                            <p className='fw-bold text-success'>{success}</p>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Login;