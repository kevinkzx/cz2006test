import React, {useContext} from 'react'
import ParlourContext from "../Context/ParlourContext";
import {SearchBar} from "./ParlourElement";

const ParlourFilter = () => {
	const {setSearch} = useContext(ParlourContext);
	return (
		<SearchBar>
			<input type="text"
			       placeholder="Search"
			       onChange={e => setSearch(e.target.value)}/>
		</SearchBar>

	)
}

export default ParlourFilter;
