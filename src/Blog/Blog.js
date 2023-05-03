import React from 'react';
import { Card } from 'react-bootstrap';


const Blog = () => {

    
    return (
        <div>
             <Card className="text-center mb-5">
      <Card.Header>Question</Card.Header>
      <Card.Body>
        <Card.Title>1.Tell us the differences between uncontrolled and controlled components.</Card.Title>
        <Card.Text>
        In React, controlled is make  components behavior controlled by the parent component. These components pass data with props from parent component to child component. Uncontrolled components refer to components that manage their own state internally.
        </Card.Text>
        <Card.Title>2.How to validate React props using PropTypes</Card.Title>
        <Card.Text>
        The prop should be a string,bolean,function,an arrey etc.
        </Card.Text>
        <Card.Title>3.Tell us the difference between nodejs and express js.</Card.Title>
        <Card.Text>
          NodeJs is used to build a natwork aplication.node js is main language is javascript ,
          express is used for make a server site ,for web application.
        </Card.Text>
        <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
        <Card.Text>
         custom Hook is a javascript function ,when we need to share a logic we creat a custom HOOK
        </Card.Text>
        
      </Card.Body>
     
    </Card>

        </div>
    );
};

export default Blog;