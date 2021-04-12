import React, {useContext} from 'react'
import ParlourContext from "../Context/ParlourContext";
import Title from "./Title";

export default function ParlourFilter() {
	const {setSearch} = useContext(ParlourContext);
	return (
		<div id="searchParlour">
			<Title title="Search Parlours"/>
			<input type="text"
			       placeholder="Search for Parlour"
			       onChange={event => {
				       setSearch(event.target.value);
			       }
			       }/>
		</div>
	)
};
