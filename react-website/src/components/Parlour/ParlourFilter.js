import React, {useContext} from 'react'
import ParlourContext from "../Context/ParlourContext";
import Title from "./Title";
import {SearchBar} from "./ParlourElement";
/**
 * The search component for parlours.
 * @returns ParlourFilter component. The parlour that user want to search for
 */
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
