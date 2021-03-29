import React, {useEffect, useState} from 'react';
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

const Navbar = ({toggle}) => {
	const [scrollNav, setScrollNav] = useState(false);

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
								          smooth={true}
								          duration={500}
								          spy={true}
								          exact={'true'}
								          offset={-80}>Packages</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="parlours"
								          smooth={true}
								          duration={500}
								          spy={true}
								          exact={'true'}
								          offset={-80}>Parlours</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="location"
								          smooth={true}
								          duration={500}
								          spy={true}
								          exact={'true'}
								          offset={-80}>Location</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="information"
								          smooth={true}
								          duration={500}
								          spy={true}
								          exact={'true'}
								          offset={-80}>Information</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink to='/signin'>Sign In</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};


export default Navbar