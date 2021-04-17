import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from 'react-scroll';
import {
	MobileIcon,
	Nav,
	NavbarContainer,
	NavBtn,
	NavBtnLink,
	NavItem,
	NavLinks,
	NavLogo,
	NavMenu
} from './NavbarElements';
import AuthContext from "../Context/AuthContext";

/**
 * This component is responsible for the navigation bar.
 * User can click on the navigation bar to scroll to the indiviudal infosection
 * @param {object} toggle The section that users click on
 * @returns the navbar component to be displayed at the top of the web page.
 */
const Navbar = ({toggle}) => {
	const [scrollNav, setScrollNav] = useState(false);
	const {user, handleLogout} = useContext(AuthContext);
	const history = useHistory();

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	/**
	 * Scrolls to the top when user click on Home in home page
	 */
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	/**
	 * Scrolls to the section of packages in home page
	 */
	const goToPackages = () => {
		history.push('/');
		scroll.scrollTo(800);
	};

	/**
	 * Scrolls to the section of parlours in home page
	 */
	const goToParlours = () => {
		history.push('/');
		scroll.scrollTo(1700);
	};

	/**
	 * Scrolls to the section of Location in home page
	 */
	const goToMap = () => {
		history.push('/');
		scroll.scrollTo(2500);
	};
	/**
	 * Scrolls to the section of information in home page
	 */
	const goToInfo = () => {
		history.push('/');
		scroll.scrollTo(3400);
	};

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/"
						         onClick={toggleHome}>
							Home
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars/>
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks to="packages"
								          onClick={goToPackages}>Packages</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="parlours"
								          onClick={goToParlours}>Parlours</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="location"
								          onClick={goToMap}>Location</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="information"
								          onClick={goToInfo}>Information</NavLinks>
							</NavItem>
						</NavMenu>
						{!user && (
							<NavBtn>
								<NavBtnLink to='/signIn'>Sign In</NavBtnLink>
							</NavBtn>)}
						{user && (
							<NavBtn>
								<NavBtnLink to='/'
								            onClick={handleLogout}>Log Out</NavBtnLink>
							</NavBtn>
						)}

					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};


export default Navbar