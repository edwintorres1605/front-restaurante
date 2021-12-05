import styled from "styled-components";

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap:1.5rem;
`;

export const Box = styled.div`

`;

export const Title = styled.h3`
    padding:.5rem 0;
    font-size: 2.5rem;
    color:var(--black);
`;

export const FooterLink = styled.a`
    display: block;
    padding:.5rem 0;
    font-size: 1.5rem;
    color:var(--light-color);

    &:hover {
        color:var(--green);
        text-decoration: underline;
    }
`;

export const Credit = styled.div`
    text-align: center;
    border-top: .1rem solid rgba(0,0,0,.1);
    font-size: 2rem;
    color:var(--black);
    padding:.5rem;
    padding-top: 1.5rem;
    margin-top: 1.5rem;
`;

export const Span = styled.span`
    color:var(--green);
`;