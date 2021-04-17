import React, {useEffect} from 'react'
import Navbar from "../components/Navbar";
import VoidDeckBooking from "../components/Information/VoidDeckBooking";

/**
 * This is the page to display information on void deck booking
 * @returns Void_deck_bookingPage
 */
const Void_deck_bookingPage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<>
			<Navbar/>
			<VoidDeckBooking/>
		</>

	)
}

export default Void_deck_bookingPage;
