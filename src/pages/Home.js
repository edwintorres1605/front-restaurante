import React from 'react';
import { Section } from '../components/Commons';
import Special from '../components/Special';
import Dishes from "../components/Dishes";
import About from "../components/About";
import Menu from "../components/Menu";
import Review from "../components/Review";

const Home = () => {
    return (
        <>
            <Section id="special">
                <Special />            
            </Section>
            <Section id="dishes">
                <Dishes />           
            </Section>
            <Section id="about">
                <About />          
            </Section>
            <Section id="menu">
                <Menu />           
            </Section>
            <Section id="review">
                <Review />           
            </Section>
        </>
    );
};

export default Home;