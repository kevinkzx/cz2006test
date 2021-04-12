import React, {useContext} from 'react'
import ParlourContext from "../Context/ParlourContext";
import Title from "./Title";
import {SearchBar} from "./ParlourElement";

export default function ParlourFilter() {
	const {setSearch} = useContext(ParlourContext);
	return (
		<div id="searchParlour">
			<Title title="Search Parlours"/>
			<SearchBar>
				<input type="text"
				       placeholder="Search for Parlour"
				       onChange={event => {
					       setSearch(event.target.value);
				       }
				       }/>
				<button type="submit"><i className="fa fa-search"/></button>
			</SearchBar>
		</div>
	)
};
