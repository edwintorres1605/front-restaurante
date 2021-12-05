import React from 'react';
import { Section } from '../components/Commons';
import Special from '../components/Special';
import Dishes from "../components/Dishes";
import About from "./About";
import Menu from "./Menu";
import Review from "./Review";

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