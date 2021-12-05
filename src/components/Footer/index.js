import React from 'react';
import {
    BoxContainer,
    Box,
    Title,
    FooterLink,
    Credit,
    Span
} from './BoxContainer';
import { Section } from '../Commons';

const Footer = () => {
    return (
        <>
            <Section>
                <BoxContainer>
                    <Box>
                        <Title>Locations</Title>
                        <FooterLink>India</FooterLink>
                        <FooterLink>Japan</FooterLink>
                        <FooterLink>Russia</FooterLink>
                        <FooterLink>USA</FooterLink>
                        <FooterLink>France</FooterLink>
                    </Box>
                    <Box>
                        <Title>Quick Links</Title>
                        <FooterLink>Home</FooterLink>
                        <FooterLink>Dishes</FooterLink>
                        <FooterLink>About</FooterLink>
                        <FooterLink>Menu</FooterLink>
                        <FooterLink>Review</FooterLink>
                    </Box>
                    <Box>
                        <Title>Contact Info</Title>
                        <FooterLink>+123-456-7890</FooterLink>
                        <FooterLink>+111-222-3333</FooterLink>
                        <FooterLink>ejemplo1@gmail.com</FooterLink>
                        <FooterLink>ejemplo2@gmail.com</FooterLink>
                        <FooterLink>Medellín, Colombia</FooterLink>
                    </Box>
                    <Box>
                        <Title>Follow Us</Title>
                        <FooterLink>Facebook</FooterLink>
                        <FooterLink>Twitter</FooterLink>
                        <FooterLink>Instagram</FooterLink>
                        <FooterLink>Linkedin</FooterLink>
                    </Box>
                </BoxContainer>
                <Credit>
                    Copyright @ 2021 by
                    <Span> Edwin Torres &amp; Mr. Web Designer</Span>
                </Credit>
            </Section>
        </>
    );
};

export default Footer;