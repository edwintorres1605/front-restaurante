import styled from "styled-components";

export const Section = styled.section`
    padding: 2rem 9%;

    &:nth-child(even){
        background:#eee;
    }

    @media (max-width:991px){
        padding:2rem;
    }
`

export const Heading = styled.h1`
    text-align: center;
    color:var(--black);
    font-size: 3rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
`

export const SubHeading = styled.h3`
    text-align: center;
    color:var(--green);
    font-size: 2rem;
    padding-top: 1rem;
`

export const Button = styled.a`
margin-top: 1rem;
display: inline-block;
font-size: 1.7rem;
color:#fff;
background: var(--black);
border-radius: .5rem;
cursor: pointer;
padding:.8rem 3rem;

&:hover {
    background: var(--green);
    letter-spacing: .1rem;
}
`