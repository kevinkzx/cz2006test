import React from 'react';
import PackageList from "./PackageList";
import PackageFilter from "./PackageFilter";
import HeroSection from "../HeroSection";

const PackageContainer = () => {
	return (
		<>
			<HeroSection HeroHeader="Check out our packages here." HeroPara="Book with us right now."/>
			<PackageFilter/>
			<PackageList/>
		</>
	);
};

export default PackageContainer;