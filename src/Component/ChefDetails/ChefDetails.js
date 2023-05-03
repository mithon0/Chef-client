import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import { FcLike } from "react-icons/fc";

const ChefDetails = () => {
    const chefDetails = useLoaderData();

    const { picture, name, years_experience, bio, num_recipes, likes } = chefDetails;
    console.log(chefDetails.recipes_set);

    // =============================================================================================
    // For Each _______________________________
    // ________________________________________________----------------------------------------
    const result = [];
    const recipie = chefDetails.recipes_set;
    recipie.forEach(element => {
        const { image, name, ingredients, description,cooking_method} = element;
        result.push(
            <Container className='ms-4 mt-5 mb-5'>


                <Card className='ms-' style={{ width: '22rem' }}>
                    <Card.Img className='p-4' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h6></h6>
                        
                        
                        <h2>Ingredient</h2>
                        <div className=''>
                            {ingredients.map((ingredient, index) => {
                                return (
                                    <div>
                                        <ul>
                                            <li>{ingredient}</li>
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                        <h1>Cooking_Method</h1>
                        <p className="card-text">{cooking_method}</p>
                    </Card.Body>
                </Card>








            </Container>
        )
    })
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // const {}=chefDetails;

    return (
        <div>
            <h1 className='text-center my-4'>Best <span className='text-danger'>Recipie</span></h1>
            <Container className='ms-5 mb-5'>
                
                        <Card className='ms-5' style={{ width: '70rem' }}>
                            <Card.Img variant="top w-50 mx-auto mt-4 rounded" src={picture} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {bio}
                                </Card.Text>
                                <h6>Number Of Recipes: {num_recipes}</h6>
                                <p className="card-text"><small className="text-body-secondary"><FcLike /> {likes}
                                </small></p>
                                <p className="card-text">Experience: {years_experience} Years</p>

                            </Card.Body>
                        </Card>
                    
                   <div className='d-flex'>
                   {result}
                   </div>

            </Container>
        </div>
    );
};

export default ChefDetails;