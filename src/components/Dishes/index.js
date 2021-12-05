import React from 'react';
import { SubHeading, Heading, Button } from '../Commons';
import { Box, BoxContainer, Dish, Eye, Heart, Text, Stars, Icon, Price } from './BoxContainer';
import dish1 from '../../images/dish-1.png';
import dish2 from '../../images/dish-2.png';
import dish3 from '../../images/dish-3.png';
import dish4 from '../../images/dish-4.png';
import dish5 from '../../images/dish-5.png';
import dish6 from '../../images/dish-6.png';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Dishes = () => {
    return (
        <>
            <SubHeading>Our Dishes</SubHeading>
            <Heading>Popular Dishes</Heading>
            <BoxContainer>
                <Box>
                    <Heart size='' />
                    <Eye />
                    <Dish src={dish1} alt="dish" />
                    <Text>Tasty Food</Text>
                    <Stars>
                        <Icon>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </Icon>
                    </Stars>
                    <Price>$15.99</Price>
                    <Button>Add to Cart</Button>
                </Box>
                <Box>
                    <Heart />
                    <Eye />
                    <Dish src={dish2} alt="dish" />
                    <Text>Tasty Food</Text>
                    <Stars>
                        <Icon>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </Icon>
                    </Stars>
                    <Price>$15.99</Price>
                    <Button>Add to Cart</Button>
                </Box>
                <Box>
                    <Heart />
                    <Eye />
                    <Dish src={dish3} alt="dish" />
                    <Text>Tasty Food</Text>
                    <Stars>
                        <Icon>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </Icon>
                    </Stars>
                    <Price>$15.99</Price>
                    <Button>Add to Cart</Button>
                </Box>
                <Box>
                    <Heart />
                    <Eye />
                    <Dish src={dish4} alt="dish" />
                    <Text>Tasty Food</Text>
                    <Stars>
                        <Icon>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </Icon>
                    </Stars>
                    <Price>$15.99</Price>
                    <Button>Add to Cart</Button>
                </Box>
                <Box>
                    <Heart />
                    <Eye />
                    <Dish src={dish5} alt="dish" />
                    <Text>Tasty Food</Text>
                    <Stars>
                        <Icon>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </Icon>
                    </Stars>
                    <Price>$15.99</Price>
                    <Button>Add to Cart</Button>
                </Box>
                <Box>
                    <Heart />
                    <Eye />
                    <Dish src={dish6} alt="dish" />
                    <Text>Tasty Food</Text>
                    <Stars>
                        <Icon>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </Icon>
                    </Stars>
                    <Price>$15.99</Price>
                    <Button>Add to Cart</Button>
                </Box>
            </BoxContainer>
        </>
    );
};

export default Dishes;