import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SinglePackage from "../components/Package/SinglePackage";

const SinglePackagePage = () => {
	// to scroll to the top of the webpage when rendered
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<>
			<Navbar/>
			<HeroSection HeroHeader="Hello"
			             HeroPara="Book with us right now."
			             getStartedButton="packageInfo"
			             scroll={true}/>
			<SinglePackage/>
		</>
	);
};

export default SinglePackagePage;