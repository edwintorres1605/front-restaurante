import styled from "styled-components";

export const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem; 
    padding-top: 6.5rem;
`

export const Content = styled.div`
    flex:1 1 45rem;
`

export const Dish = styled.div`
    flex:1 1 45rem;
`

export const Intro = styled.span`
    color:var(--green);
    font-size: 2.5rem;
`


export const Heading = styled.h3`
    color:var(--black);
    font-size: 7rem;

    @media (max-width:991px) {
        font-size: 5rem;
    }
`

export const Text = styled.p`
    color:var(--light-color);
    font-size: 2.2rem;
    padding:.5rem 0;
    line-height: 1.5;
`