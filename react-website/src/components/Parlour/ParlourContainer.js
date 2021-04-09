import React from 'react';
//import PackageFilter from '../Package/PackageFilter';
import ParlourFilter from './ParlourFilter';
import ParlourList from './ParlourList';

const ParlourContainer = () => {
	return (
		<>
			<ParlourFilter/>
			<ParlourList/>
		</>
	);
};

export default ParlourContainer;