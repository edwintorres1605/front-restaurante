import React from 'react';
import { 
    SubHeading, 
    Heading, 
    Button 
} from '../Commons';
import dish1 from '../../images/menu-1.jpg';
import dish2 from '../../images/menu-2.jpg';
import dish3 from '../../images/menu-3.jpg';
import dish4 from '../../images/menu-4.jpg';
import dish5 from '../../images/menu-5.jpg';
import dish6 from '../../images/menu-6.jpg';
import dish7 from '../../images/menu-7.jpg';
import dish8 from '../../images/menu-8.jpg';
import dish9 from '../../images/menu-9.jpg';
import { 
    FaHeart, 
    FaStar, 
    FaStarHalfAlt 
} from 'react-icons/fa';
import { 
    Box, 
    BoxContainer, 
    Content, 
    Description, 
    Dish, 
    Heart, 
    Picture, 
    Price, 
    Stars
} from './BoxContainer';
import { Icon, Text } from '../Dishes/BoxContainer';

const Menu = () => {
    return (
        <>
            <SubHeading>Our Menu</SubHeading>
            <Heading>Today's Speciality</Heading>
            <BoxContainer>
                <Box>
                    <Picture>
                        <Dish src={dish1} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
                <Box>
                    <Picture>
                        <Dish src={dish2} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
                <Box>
                    <Picture>
                        <Dish src={dish3} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
                <Box>
                    <Picture>
                        <Dish src={dish4} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
                <Box>
                    <Picture>
                        <Dish src={dish5} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
                <Box>
                    <Picture>
                        <Dish src={dish6} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
                <Box>
                    <Picture>
                        <Dish src={dish7} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
                <Box>
                    <Picture>
                        <Dish src={dish8} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
                <Box>
                    <Picture>
                        <Dish src={dish9} alt="dish" />
                        <Heart>
                            <FaHeart />
                        </Heart>
                    </Picture>
                    <Content>
                        <Stars>
                            <Icon>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </Icon>
                        </Stars>                    
                        <Text>Delicious Food</Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.
                        </Description>
                        <Button>Add to Cart</Button>
                        <Price>$12.99</Price>
                    </Content>
                </Box>
            </BoxContainer>
        </>
    );
};

export default Menu;