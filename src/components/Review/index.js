import React from 'react';
import { SubHeading, Heading } from '../Commons';
import {
    Container,
    Swiper,
    Slide,
    User,
    UserInfo,
    Name,
    Stars,
    Comment,
    Quote,
    Avatar
} from './Container';
import { FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Photo1 from '../../images/pic-1.png';
import Photo2 from '../../images/pic-2.png';
import Photo3 from '../../images/pic-3.png';

const Review = () => {
    return (
        <>
            <SubHeading>Customer's Review</SubHeading>
            <Heading>What they say</Heading>
            <Container>
                <Swiper>
                    <Slide>
                        <Quote />
                        <User>
                            <Avatar src={Photo1} alt="user photo" />
                            <UserInfo>
                                <Name>John Deo</Name>
                                <Stars>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </Stars>
                            </UserInfo>
                        </User>
                        <Comment>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</Comment>
                    </Slide>
                    <Slide>
                        <Quote />
                        <User>
                            <Avatar src={Photo2} alt="user photo" />
                            <UserInfo>
                                <Name>John Deo</Name>
                                <Stars>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </Stars>
                            </UserInfo>
                        </User>
                        <Comment>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</Comment>
                    </Slide>
                    <Slide>
                        <Quote />
                        <User>
                            <Avatar src={Photo3} alt="user photo" />
                            <UserInfo>
                                <Name>John Deo</Name>
                                <Stars>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </Stars>
                            </UserInfo>
                        </User>
                        <Comment>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</Comment>
                    </Slide>
                </Swiper>
            </Container>
        </>
    );
};

export default Review;