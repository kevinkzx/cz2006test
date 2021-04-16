import React, {useEffect} from 'react'
import Navbar from "../components/Navbar";
import FuneralProcess from "../components/Information/FuneralProcess";

/**
 * This is the page to display the information for funeral process
 * @returns Funeral_processPage
 */
const Funeral_processPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<>
			<Navbar/>
			<FuneralProcess/>
		</>
	)
}

export default Funeral_processPage;
