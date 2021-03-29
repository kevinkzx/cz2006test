//import React from 'react';
import React, {useEffect} from 'react';
//import PackageContainer from "../components/Package/PackageContainer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ParloursContainer from "../components/Parlour/ParloursContainer";
import {Link} from "react-router-dom";



const Parlourmainpage = () => {

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


    return (
        <>
            <div>Hello from parlour container</div>
            <ParloursContainer />
        </>
        
    )
}

export default Parlourmainpage;
