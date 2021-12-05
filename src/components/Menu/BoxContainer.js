import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
`;

export const Box = styled.div`
    background: #fff;
    border:.1rem solid rgba(0,0,0,.2);
    border-radius: .5rem;
    box-shadow: var(--box-shadow); 
`;

export const Picture = styled.div`
    height: 25rem;
    width: 100%;
    padding:1.5rem;
    overflow: hidden;
    position: relative;
`;

export const Dish = styled.img`
    height: 100%;
    width: 100%;
    border-radius: .5rem;
    object-fit: cover;
`;

export const Heart = styled(FaHeart)`
    position: absolute;
    top:2.5rem; right: 2.5rem;
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    padding: 1.5rem;
    text-align: center;
    font-size: 2rem;
    background: #fff;
    border-radius: 50%;
    color:var(--black);

    &:hover {
        color:#fff;
        background: var(--green);
    }
`;

export const Content = styled.div`
    padding: 2rem;
    padding-top: 0;
`;

export const Stars = styled.div`
    padding-bottom: .1rem;
`;

export const Description = styled.p`
    color:var(--light-color);
    font-size: 1.6rem;
    padding:.5rem 0;
    line-height: 1.5;
`;

export const Price = styled.span`
    color:var(--green);
    margin-left: 1rem;
    font-size: 2.5rem;
`;