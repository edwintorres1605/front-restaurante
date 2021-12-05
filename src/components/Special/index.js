import React from 'react';
import { Slide, Content, Dish, Intro, Heading, Text } from './Slide';
import { Button } from '../Commons';
import plato from '../../images/home-img-1.png';

const Special = () => {
    return (
        <>
            <Slide>
                <Content>
                    <Intro>Our Special Dish</Intro>
                    <Heading>Spicy Noodles</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</Text>
                    <Button>Order Now</Button>
                </Content>
                <Dish>
                    <img src={plato} alt="plato" width="100%" />
                </Dish>
            </Slide>
        </>
    );
};

export default Special;