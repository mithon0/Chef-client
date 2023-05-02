import React from 'react';
import Navigation from '../../Navigation/Navigation';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container className='w-50 bg-white py-5 rounded mt-5'>
                <h1 className='text-center'>Please Sign Up</h1>
            <Form>
            <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Full name" />
       
      </Form.Group>
            <Form.Group className="mb-3" >
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" placeholder="Url" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p className='text-danger'><small>Alredy have an account?</small><Link to='/login'>Login</Link></p>
    </Form>
            </Container>
        </div>
    );
};

export default Register;