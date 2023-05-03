import React, { useContext, useState } from 'react';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const { createUserWithEmailPass, } = useContext(AuthContext);
  const registerHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const imgUrl = form.Url.value;
    console.log(email, password);
    if(!email){
      toast("Please inter email address");
      return 
      
    }
    if(!password.length == 6){
      toast("password at least 6 cherecter")
      return
    }
    createUserWithEmailPass(email, password)
      .then(result => {
        const loggedUser = result
        console.log(loggedUser);
        toast("Account Create Succesfull")
      })
      .catch(error => {
        console.log(error.massage);
        toast(error.message)
      });


    const auth = getAuth(app);
    updateProfile(auth.currentUser, {
      displayName: `${name}`, photoURL: `${imgUrl}`
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });


  }


  return (
    <div>

      <Container className='w-50 bg-white py-5 rounded mb-5 mt-5'>
        <h1 className='text-center'>Please Sign Up</h1>
        <Form onSubmit={registerHandler}>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Full name" />

          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Photo Url</Form.Label>
            <Form.Control name='Url' type="text" placeholder="Url" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Show password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className='text-danger'><small>Alredy have an account?</small><Link to='/login'>Login</Link></p>
        </Form>

        <div className='text-center'>
          <Button variant="outline-primary"><BsGoogle /> Sign In Google</Button>
          <Button variant="outline-secondary"><BsGithub /> Sign In With Git Hub</Button>
        </div>
        <ToastContainer></ToastContainer>
      </Container>
    </div>
  );
};

export default Register;