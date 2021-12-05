import React from 'react';
import { SubHeading, Heading, Button } from '../Commons';
import {
    Row,
    Picture,
    Image,
    ContentBox,
    Title,
    Description,
    IconsContainer,
    Icons,
    Icon,
    Span
} from './Content';
import ImageAbout from '../../images/about-img.png';
import { FaDollarSign, FaHeadset, FaShippingFast } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <SubHeading>About Us</SubHeading>
            <Heading>Why choos us?</Heading>
            <Row>
                <Picture>
                    <Image src={ImageAbout} alt="dish about" />
                </Picture>
                <ContentBox>
                    <Title>Best food in the Country</Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!
                    </Description>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.
                    </Description>
                    <IconsContainer>
                        <Icons>
                            <Icon>
                                <FaShippingFast />
                            </Icon>
                            <Span>
                                Free delivery
                            </Span>
                        </Icons>
                        <Icons>
                            <Icon>
                                <FaDollarSign />
                            </Icon>
                            <Span>
                                Easy payments
                            </Span>
                        </Icons>
                        <Icons>
                            <Icon>
                                <FaHeadset />
                            </Icon>
                            <Span>
                                24/7 Service
                            </Span>
                        </Icons>
                    </IconsContainer>
                    <Button>Learn More</Button>
                </ContentBox>
            </Row>
        </>
    );
};

export default About;