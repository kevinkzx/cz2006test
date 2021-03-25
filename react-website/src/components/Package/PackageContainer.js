import React from 'react';
import PackageList from "./PackageList";
import PackageFilter from "./PackageFilter";

const PackageContainer = () => {
	return (
		<>
			<PackageFilter/>
			<PackageList/>
		</>
	);
};

export default PackageContainer;