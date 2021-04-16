import React from 'react';
import ParlourFilter from './ParlourFilter';
import ParlourList from './ParlourList';

/**
 * Container component for the components ParlourFilter and ParlourList
 * @returns the container ParlourContainer
 */
const ParlourContainer = () => {
	return (
		<>
			<ParlourFilter/>
			<ParlourList/>
		</>
	);
};

export default ParlourContainer;