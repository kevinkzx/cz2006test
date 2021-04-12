import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SinglePackage from "../components/Package/SinglePackage";
import Reviews from '../components/Reviews';
import { NavLogo } from '../components/Navbar/NavbarElements';
import Home from '.';

const ReviewsPage = () => {
	// to scroll to the top of the webpage when rendered
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<>
			{/* <HeroSection HeroHeader="Hello"
			             HeroPara="Book with us right now."
			             getStartedButton="packageInfo"
			             scroll={true}/> */}
            <Reviews/>
		</>
	);
};

export default ReviewsPage;