import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SingleParlour from "../components/Parlour/SingleParlour";
import ParlourBooking from "../components/Parlour/ParlourBooking";

/**
 * This is the page for each individual parlour
 * @returns SingleParlourPage
 */
const SingleParlourPage = () => {
	//to scroll to the top of the webpage when rendered
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Navbar/>
			<HeroSection HeroHeader="Hello"
			             HeroPara="Book with us right now."
			             getStartedButton="parlourInfo"
			             scroll={true}/>
			<SingleParlour/>
			<ParlourBooking/>
		</>
	);
};

export default SingleParlourPage;
