import React, {useContext, useEffect, useState, useRef} from 'react';
import { useHistory } from "react-router-dom";
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

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	const goToPackages = () => {
		history.push('/');
		scroll.scrollTo(800);
	};

	const goToParlours = () => {
		history.push('/');
		scroll.scrollTo(1700);
	};

	const goToMap = () => {
		history.push('/');
		scroll.scrollTo(2500);
	};

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
								          // smooth={true}
								          // duration={500}
								          // spy={true}
								          // exact={'true'}
								          // offset={-80}
										  onClick={goToPackages}>Packages</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="parlours"
								          // smooth={true}
								          // duration={500}
								          // spy={true}
								          // exact={'true'}
								          // offset={-80}
										  onClick={goToParlours}>Parlours</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="location"
								          // smooth={true}
								          // duration={500}
								          // spy={true}
								          // exact={'true'}
								          // offset={-80}
										  onClick={goToMap}>Location</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="information"
								          // smooth={true}
								          // duration={500}
								          // spy={true}
								          // exact={'true'}
								          // offset={-80}
										  onClick={goToInfo}>Information</NavLinks>
							</NavItem>
						</NavMenu>
						{!user && (
							<NavBtn>
								<NavBtnLink to='/signIn'>Sign In</NavBtnLink>
							</NavBtn>)}
						{user && (
							<NavBtn>
								<NavBtnLink to='/' onClick={handleLogout}>Log Out</NavBtnLink>
							</NavBtn>
						)}

					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};


export default Navbar