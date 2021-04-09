import React, {useContext} from 'react';
import ParlourContext from "../Context/ParlourContext";
import ParlourCard from "./ParlourCard";
import {EmptySearch, Parlour_List, ParlourListCenter} from "./ParlourElement";


const ParlourList = () => {
	/*
	const {sortedParlours} = useContext(ParlourContext);
	if (sortedParlours.length === 0) {
		return (
			<EmptySearch>
				<h3>Unfortunately no parlours matched your search preferences.</h3>
			</EmptySearch>
		)
	}
	*/
	const {parlours} = useContext(ParlourContext);
	return (
		<Parlour_List>
			<ParlourListCenter>
				{parlours.map(item => {
					return <ParlourCard key={item.sys.id}
										item={item}/>;
				})}
			</ParlourListCenter>
		</Parlour_List>
	);
};

export default ParlourList;

