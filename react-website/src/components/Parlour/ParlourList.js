import React, {useContext} from 'react';
import ParlourContext from "../Context/ParlourContext";
import ParlourCard from "./ParlourCard";
import {EmptySearch, Parlour_List, ParlourListCenter} from "./ParlourElement";


const ParlourList = () => {
	const {sortedParlours} = useContext(ParlourContext);
	if (sortedParlours.length === 0) {
		return (
			<EmptySearch>
				<h3>Unfortunately no parlours matched your search preferences.</h3>
			</EmptySearch>
		)
	}
	return (
		<Parlour_List>
			<ParlourListCenter>
				{sortedParlours.map(item => {
					return <ParlourCard key={item.id}
										item={item}/>;
				})}
			</ParlourListCenter>
		</Parlour_List>
	);
};

export default ParlourList;

