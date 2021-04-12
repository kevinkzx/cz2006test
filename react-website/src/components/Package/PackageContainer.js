import React from 'react';
import PackageList from "./PackageList";
import PackageFilter from "./PackageFilter";
import { CompareInstructions } from './PackageElements';

const PackageContainer = () => {
	return (
		<>
			
			<PackageFilter/>
			<CompareInstructions>
				Check boxes to compare packages
			</CompareInstructions>
			<PackageList/>
		</>
	);
};

export default PackageContainer;