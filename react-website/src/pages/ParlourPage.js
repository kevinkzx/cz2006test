import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
//import ParlourHome from "../components/Parlour/ParlourHome";
import ParlourContainer from "../components/Parlour/ParlourContainer";

/**
 * This is the page to display all the parlours available
 * @returns ParlourPage
 */
const ParlourPage = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<>
			<Navbar/>
			<HeroSection HeroHeader="Check out our parlours here."
			             HeroPara="Engage with our parlours now to find what suits you best."
			             getStartedButton="searchParlour"
			             scroll={true}/>
			<ParlourContainer/>
		</>

	)
}

export default ParlourPage;
