import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import InfoSection from "../components/InfoSection";
import {homeObjOne, homeObjTwo} from "../components/InfoSection/Data";
import {InformationObj, MapObj} from "../components/Services/Data";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	}





	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<HeroSection HeroHeader="Get your funeral services here today." HeroPara="Book our packages right now."/>
			<InfoSection {...homeObjOne}/>
			<InfoSection {...homeObjTwo}/>
			<Services {...MapObj}/>
			<Services {...InformationObj}/>
		</>
	);
};

export default Home;