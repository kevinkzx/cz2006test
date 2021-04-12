import React, {useEffect} from 'react';
import Reviews from '../components/Reviews';

const ReviewsPage = () => {
	// to scroll to the top of the webpage when rendered
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<>
			{/* <HeroSection HeroHeader="Hello"
			             HeroPara="Book with us right now."
			             getStartedButton="packageInfo"
			             scroll={true}/> */}
			<Reviews/>
		</>
	);
};

export default ReviewsPage;