import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SinglePackage from "../components/Package/SinglePackage";

const SinglePackagePage = () => {
	return (
		<>
			<Navbar/>
			<HeroSection HeroHeader="Hello"
			             HeroPara="Book with us right now."/>
			<SinglePackage/>
		</>
	);
};

export default SinglePackagePage;