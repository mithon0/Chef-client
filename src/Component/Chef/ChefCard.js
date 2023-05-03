import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import LazyLoad from 'react-lazy-load';


const ChefCard = ({chef}) => {
    // console.log(chef);
    const {picture,name,years_experience,bio,id,num_recipes,likes}=chef;
    return (
        <div>
          <Card style={{ width: '27rem' }}>
          <LazyLoad offset={300} threshold={0.10} onContentVisible={() => {console.log('loaded!')}}>
          <Card.Img variant="top" src={picture} />
    </LazyLoad>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {bio}
        </Card.Text>
        <p>Experience: {years_experience} Year</p>
        <h5>Numbers of recipes : {num_recipes}</h5>
        <h4>Likes: {likes}<FcLike/></h4>
        <Button variant="primary"><Link className='text-white' to={`/chef/${id}`}>View Recipes</Link></Button>
      </Card.Body>
    </Card>  
        </div>
    );
};

export default ChefCard;