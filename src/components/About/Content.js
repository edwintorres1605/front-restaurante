import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
    align-items: center;
`;

export const Picture = styled.div`
    flex:1 1 45rem;
`;

export const Image = styled.img`
    width: 100%;
`;

export const ContentBox = styled.div`
    flex:1 1 45rem;
`;

export const Title = styled.h3`
    color:var(--black);
    font-size: 4rem;
    padding:.5rem 0;
`;

export const Description = styled.p`
    color:var(--light-color);
    font-size: 1.5rem;
    padding:.5rem 0;
    line-height: 2;
`;

export const IconsContainer = styled.div`
    display: flex;
    gap:1rem;
    flex-wrap: wrap;
    padding:1rem 0;
    margin-top: .5rem;
`;

export const Icons = styled.div`
    background:#eee;
    border-radius: .5rem;
    border:.1rem solid rgba(0,0,0,.2);
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;
    flex:1 1 17rem;
    padding:1.5rem 1rem;
`;

export const Icon = styled.i`
    font-size: 3rem;
    color:var(--green);
    line-height: 1rem;
`;

export const Span = styled.span`
    font-size: 1.5rem;
    color:var(--black);
`;