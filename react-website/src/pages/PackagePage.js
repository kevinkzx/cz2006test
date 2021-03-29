import React, {useEffect} from 'react';
import PackageContainer from "../components/Package/PackageContainer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const PackagePage = () => {

	// to scroll to the top of the webpage when rendered
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
			<PackageContainer/>
		</>
	);
};

export default PackagePage;