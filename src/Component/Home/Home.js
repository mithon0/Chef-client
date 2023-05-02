import React from 'react';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';

import { Button, Carousel } from 'react-bootstrap';
import Chef from '../Chef/Chef';
const Home = () => {
    return (
       <div>
         <div className='d-flex justify-content-between mb-5'> 
            <div className='align-items-center text-center mt-5 pt-5 mx-5 px-5'>
                <h1 className='text-danger jj'>Japanese <br /> Restaurant</h1>
                <p className='px-5 '>
                We try to show you all the variety of Japanese cuisine and its current trends
                </p>
                <Button variant="danger">Book a Table</Button>
            </div>

            <Carousel className='w-50 mx-auto '>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 rounded"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>Savoring Umami: Exploring the Flavors of Japanese Cuisine</h3>
                        <p>Experience the unique tastes and aromas of Japanese food, from savory miso soup to crispy tempura and delicate sushi rolls. Discover the secrets of umami, the fifth taste that adds depth and richness to every dish.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 rounded"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>From Ramen to Bento: A Journey Through Japan's Culinary Traditions</h3>
                        <p>Embark on a culinary adventure through the diverse regions of Japan, from the hearty comfort food of Hokkaido to the delicate flavors of Kyoto. Learn about the history and cultural significance of Japanese cuisine, and sample a wide range of dishes from street food to high-end restaurants.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>Artistry on a Plate: The Beauty of Japanese Food Presentation</h3>
                        <p>
                            Japanese food is not only delicious but also visually stunning, with a focus on elegant plating and attention to detail. Discover the artistry of Japanese food presentation, from the vibrant colors of sushi to the intricate designs of bento boxes. Learn how to create your own beautiful and delicious Japanese dishes at home.






                            Regenerate response
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
        <section>
            <Chef></Chef>
        </section>
       </div>
    );
};

export default Home;