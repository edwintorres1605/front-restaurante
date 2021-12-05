import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import styled from "styled-components";


export const BoxContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
gap:1.5rem;
`;

export const Box = styled.div`
    padding:2.5rem;
    background:#fff;
    border-radius: .5rem;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
`;

export const Heart = styled(FaHeart)`
    position: absolute;
    top:1.5rem;
    background:#eee;
    border-radius: 50%;
    height: 5rem;
    width:5rem;
    line-height: 5rem;
    padding: 1.5rem;
    color:var(--black);
    cursor: pointer;
    right:-15rem;

    &:hover {
        color:#fff;
        background: var(--green);
    }

    ${Box}:hover & {
        right:1.5rem;
    }
`;

export const Eye = styled(FaEye)`
    position: absolute;
    top:1.5rem;
    background:#eee;
    border-radius: 50%;
    height: 5rem;
    width:5rem;
    line-height: 5rem;
    padding: 1.2rem;
    color:var(--black);
    cursor: pointer;
    left:-15rem;

    &:hover {
        color:#fff;
        background: var(--green);
    }

    ${Box}:hover & {
        left:1.5rem;
    }
`;

export const Dish = styled.img`
    height:17rem;
    margin:1rem 0;
`;

export const Text = styled.h3`
    color:var(--black);
    font-size: 2.5rem;
`;

export const Stars = styled.div`
    padding: .8rem 0 .5rem;
`;

export const Icon = styled.div`
    font-size: 2rem;
    color:var(--green);
`;

export const Price = styled.span`
    color:var(--green);
    font-weight: bolder;
    margin-right: 1rem;
    font-size: 2.5rem;
`;
