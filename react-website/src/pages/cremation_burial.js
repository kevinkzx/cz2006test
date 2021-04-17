import React, {useEffect} from 'react'
import 'semantic-ui-css/components/menu.css'
import Navbar from "../components/Navbar";
import CremationBurialInfo from "../components/Information/CremationBurialInfo";

/**
 * This is the page to show information for cremation and burial
 * @returns Cremation_burialPage
 */
const Cremation_burialPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<>
			<Navbar/>
			<CremationBurialInfo/>
		</>
	)
}

export default Cremation_burialPage
