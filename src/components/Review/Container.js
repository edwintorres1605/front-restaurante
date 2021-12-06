import { FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
`;

export const Swiper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    gap:1.5rem;
`;

export const Slide = styled.div`
    padding:2rem;
    box-shadow:var(--box-shadow);
    border:.1rem solid rgba(0,0,0,.2);
    border-radius: .5rem;
    position: relative; 
`;

export const Quote = styled(FaQuoteRight)`
    position: absolute;
    top:2rem; right:2rem;
    font-size: 6rem;
    color:#ccc;
`;

export const User = styled.div`
    display: flex;
    gap:1.5rem;
    align-items: center;
    padding-bottom: 1.5rem;

    &img {
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
        object-fit: cover;
    }
`;

export const Avatar = styled.img`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserInfo = styled.div`

`;

export const Name = styled.h3`
    color:var(--black);
    font-size: 2rem;
    padding-bottom: .5rem;
`;

export const Stars = styled.div`
    font-size: 1.6rem;
    color:var(--green);
`;

export const Comment = styled.p`
    font-size: 1.5rem;
    line-height: 1.8;
    color:var(--light-color);
`;
