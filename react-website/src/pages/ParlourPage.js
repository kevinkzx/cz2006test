import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
//import ParlourHome from "../components/Parlour/ParlourHome";
import ParlourContainer from "../components/Parlour/ParlourContainer";


const ParlourPage = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<>
			<Navbar/>
			<HeroSection HeroHeader="Check out our packages here."
			             HeroPara="Book with us right now."
			             getStartedButton="searchFilter"
			             scroll={true}/>
			<h1>Welcome to parlour page</h1>
			<ParlourContainer/>
		</>

	)
}

export default ParlourPage;
