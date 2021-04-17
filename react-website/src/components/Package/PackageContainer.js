import React from 'react';
import PackageList from "./PackageList";
import PackageFilter from "./PackageFilter";

/**
 * Container component for list of packages
 * Uses the component PackageFilter and PackageList
 * @returns PackageContainer comppnent
 */
const PackageContainer = () => {
	return (
		<>
			<PackageFilter/>
			<PackageList/>
		</>
	);
};

export default PackageContainer;