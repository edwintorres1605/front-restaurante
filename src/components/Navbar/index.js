import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
    FaBars, 
    FaUser, 
    FaHeart, 
    FaShoppingCart,
    FaStore,
    FaSearch,
    FaTimes
} from "react-icons/fa";

import {
    Header, 
    Logo, 
    Utensils, 
    NavMenu, 
    NavLink,
    NavIcons, 
    NavIcon,
    SearchForm,
    SearchBox,
    SearchLabel,
    Close
} from './NavbarElements';

const Navbar = () => {    
    const [view, setView] = useState(true);
    const [click, setClick] = useState(false);
    const [clickSearch, setClickSearch] = useState(false);

    const handleClick = () => setView(false);

    const handleReset = () => setView(true);

    const handleMenu = () => setClick(!click);

    const closeMenu = () => setClick(false);

    const handleSearch = () => setClickSearch(!clickSearch);

    return (
        <>
            <Header>    
                {view ? 
                <>
                    <Logo
                        to="special"
                        spy={true}
                        smooth={true}
                        duration={300}
                        offset={-55}
                        onClick={closeMenu}
                        >
                        <Utensils />
                        Resto.
                    </Logo>
                    <NavMenu className={click && 'active'}>
                        <NavLink to="special" onClick={handleMenu}>
                            Special
                        </NavLink>
                        <NavLink to="dishes" onClick={handleMenu}>
                            Dishes
                        </NavLink>
                        <NavLink to="about" onClick={handleMenu}>
                            About
                        </NavLink>
                        <NavLink to="menu" onClick={handleMenu}>
                            Menu
                        </NavLink>
                        <NavLink to="review" onClick={handleMenu}>
                            Review
                        </NavLink>
                    </NavMenu>
                </>
                :
                    <Logo as={Link} to="/" onClick={handleReset}>
                    <Utensils />
                    Resto.
                </Logo>}
                <NavIcons>  
                    {view ?
                    <NavIcon as={Link} to="/" onClick={handleSearch}>
                        <FaSearch />
                    </NavIcon> 
                    :
                    <NavIcon as={Link} to="/">
                        <FaStore onClick={handleReset} />
                    </NavIcon> 
                    }
                    <NavIcon as={Link} to="/favorites" onClick={handleClick}>
                        <FaHeart />
                    </NavIcon>
                    <NavIcon as={Link} to="/shopping" onClick={handleClick}>
                        <FaShoppingCart />
                    </NavIcon>
                    <NavIcon as={Link} to="/sign-in" onClick={handleClick}>
                        <FaUser />
                    </NavIcon>
                    {view &&
                    <NavIcon id="menu-bars" onClick={handleMenu}>
                        {click ? <FaTimes /> : <FaBars />} 
                    </NavIcon>
                    }
                </NavIcons>
            </Header>
            <SearchForm className={clickSearch && 'active'}>
                <SearchBox type="search" placeholder="search here..." id="search-box" />
                <SearchLabel for="search-box"><FaSearch onClick={handleSearch} /></SearchLabel>
                <Close id="close" onClick={handleSearch} />
            </SearchForm>
        </>
    );
};

export default Navbar;