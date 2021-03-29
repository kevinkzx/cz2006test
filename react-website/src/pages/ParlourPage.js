//import React from 'react';
import React, {useEffect} from 'react';
//import PackageContainer from "../components/Package/PackageContainer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ParlourHome from "../components/Parlour/ParlourHome";
import ParloursContainer from "../components/Parlour/ParloursContainer";



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
            <ParlourHome />
            <ParloursContainer />
        </>
        
    )
}

export default ParlourPage;
