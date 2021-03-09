import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Home
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />   
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                           <NavLinks to="packages">Packages</NavLinks>
                        </NavItem>
                        <NavItem>
                           <NavLinks to="parlours">Parlours</NavLinks>
                        </NavItem>
                        <NavItem>
                           <NavLinks to="location">Location</NavLinks>
                        </NavItem>
                        <NavItem>
                           <NavLinks to="information">Information</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
