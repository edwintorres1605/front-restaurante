import styled from "styled-components";
import { Link, animatedScroll as scroll } from "react-scroll";
import PropTypes  from "prop-types";
import { FaUtensils, FaTimes } from "react-icons/fa";

export const Header = styled.header`
    position: fixed;
    top: 0; 
    left: 0; 
    right: 0;
    background: var(--white); 
    padding: 1rem 7%; 
    display: flex; 
    align-items: center;   
    justify-content: space-between;        
    z-index: 1000;
    box-shadow: var(--box-shadow);

    @media screen and (max-width:991px){
        padding: 1rem 2rem;
    }
`;

export const Logo = styled(Link)`
    display: flex; 
    align-items: center;   
    justify-content: space-between; 
    color: var(--black);
    font-size: 2.5rem;
    font-weight: bolder;
    cursor: pointer;
`;

export const Utensils = styled(FaUtensils)`
    color: var(--green);
`;

export const NavMenu = styled.nav`
    @media screen and (max-width:768px){
        position: absolute;
        top:100%; left:0; right:0;
        background:#fff;
        border-top: .1rem solid rgba(0,0,0,.2);
        border-bottom: .1rem solid rgba(0,0,0,.2);
        padding:1rem;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

        &.active {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }        
    }
`;

export const NavLink = styled(Link)`
    font-size: 1.7rem;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    color: var(--light-color);
    cursor: pointer;

    &.active, &:hover {
        color: var(--white);
        background: var(--green);
    }

    @media screen and (max-width:768px){
        display: block;
        padding:1.5rem;
        margin:1rem;
        font-size: 2rem;
        background:#eee;
    }
`;

NavLink.defaultProps = {
    activeClass: "active",
    spy: true,
    smooth: true,
    duration: 300,
    offset: -55
};

export const NavIcons = styled.div`
    display: flex;        
    justify-content: space-between; 
`;

export const NavIcon = styled.div`
    cursor: pointer;
    margin-left: .5rem;
    height:4.5rem;
    line-height: 5rem;
    width:4.5rem;
    text-align: center;
    font-size: 1.7rem;
    color:var(--black);
    border-radius: 50%;
    background: #eee;

    &:hover {
        color:#fff;
        background: var(--green);
        transform: rotate(360deg);
    }

    &#menu-bars {
        display: none;

        @media screen and (max-width:768px){
            display: inline-block;
        }
    }

`; 

export const SearchForm = styled.form`
    position: fixed;
    top:-110%; 
    left:0; 
    height:100%; 
    width:100%;
    z-index: 1004;
    background:rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0 1rem;

    &.active {
        top:0;
    }
`;

export const Close = styled(FaTimes)`
    &#close {
        position: absolute;
        color:#fff;
        cursor: pointer;
        top: 2rem; right:3rem;
        font-size: 5rem;
    }
`

export const SearchBox = styled.input`
    width:50rem;
    border-bottom: .1rem solid #fff;
    padding:1rem 0;
    color:#fff;
    font-size: 3rem;
    text-transform: none;
    background:none;

    &::placeholder {
        color: #eee;
    }

    &::-webkit-search-cancel-button{
        -webkit-appearance: none;
    }

    @media screen and (max-width:768px){
        width:90%;
        margin:0 1rem;
    }
`;

export const SearchLabel = styled.label`
    color:#fff;
    cursor:pointer;
    font-size: 3rem;

    &:hover {
        color:var(--green);
    }
`;
