import React, { useContext } from 'react';
import Navigation from '../../Navigation/Navigation';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const{name,createUserWithGoogle,createUserWithGitHub,logIn}=useContext(AuthContext);
  const googleProvider=new GoogleAuthProvider();
  const GitProvider =new GithubAuthProvider();
  

  const GoogleHandler=()=>{
    createUserWithGoogle(googleProvider)
    .then(result=>{
      const loggedUser =result;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.log(error.massage);
    })
  }

  const GitHeandler=()=>{
    createUserWithGitHub(GitProvider)
    .then(result=>{
      const loggedUser =result;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.log(error.massage);
    })
  }

  const logInHandler =(event)=>{
    event.preventDefault();
    const form =event.target;
    const email=form.email.value;
    const password =form.password.value;
    logIn(email,password)
    .then(result=>{
      const loggedUser=result;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.log(error);
    })

  }

  console.log(name);

    return (
        <div>
           
            <Container className='w-25 bg-white py-5 rounded mb-5 mt-5'>
                <h1 className='text-center'>Please Login</h1>
            <Form onSubmit={logInHandler}>
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
      <p className='text-danger'><Link to='/register'>Create an account</Link></p>
    </Form>
    <div className='text-center '>
        <Button onClick={GoogleHandler} className='w-100' variant="outline-primary"><BsGoogle/> Sign In Google</Button>
        <Button onClick={GitHeandler} className='w-100' variant="outline-secondary"><BsGithub/> Sign In With Git Hub</Button>
        </div>
            </Container>
        </div>
    );
};

export default Login;