import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    console.log(chef);
    const {picture,name,years_experience,bio,id}=chef;
    return (
        <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {bio}
        </Card.Text>
        <Button variant="primary"><Link to={`/chef/:${id}`}>View Recipes</Link></Button>
      </Card.Body>
    </Card>  
        </div>
    );
};

export default ChefCard;