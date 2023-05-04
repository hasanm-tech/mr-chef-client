import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';

const Register = () => {

    const {createUser,updateUserData} = useContext(AuthContext);
   const [error,setError] = useState(null)
    
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.pass.value;
        form.reset()
        createUser(email,pass,name,photo)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserData(result.user, name,photo)
        })
        .catch(error => {
            console.error(error)
        })

        if(email == ''){
            setError('provide a valid email')
        } 
        else if(pass == ''){
            setError('provide a valid password ')
        }
        else if(pass.length < 6){
            setError('password length should be at least 6')
        }
        
    }


    

    return (
        <div className='login'>
        <Container>
        <Row>
            <Col md={6} sm={12} className='mx-auto my-5'>
                <div className="log-info my-5">
                <div className="text-center">
                            <h2 className='text-dark fw-bold'>Please Register </h2>
                        </div>
                    <form onSubmit={handleRegister}>
                       <div>
                            <label>Name</label> <br />
                            <input type="text" name='name' placeholder='Enter your name ' />
                       </div>

                       <div>
                            <label htmlFor="">Photo Url </label> <br />
                            <input type="text" name='photo' placeholder='Enter your photo url ' />
                       </div>

                       <div>
                            <label htmlFor="">email </label> <br />
                            <input type="text" required name='email' placeholder='Enter your photo url ' />
                       </div>

                       <div>
                            <label htmlFor="" >PassWord</label> <br />
                            <input type="password" required name='pass'  placeholder='Enter your Password ' />
                       </div>

                       <button variant='dark' className='my-2'>Register</button>
                        
                        <div className='redirect'>
                            <p style={{fontWeight:'500'}}>New to the website,  go to <Link  to='/login'>Login</Link></p>
                            <br /><br />

                            <p className='fw-bold text-danger'>{error}</p>
                        </div>
                    </form>

                   
                </div>
            </Col>
        </Row>
    </Container>
    </div>
    );
};

export default Register;