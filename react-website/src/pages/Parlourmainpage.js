import React, {useEffect} from 'react';
import ParloursContainer from "../components/Parlour/ParloursContainer";


const Parlourmainpage = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<>
			<div>Hello from parlour container</div>
			<ParloursContainer/>
		</>

	)
}

export default Parlourmainpage;
