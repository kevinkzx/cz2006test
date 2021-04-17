import React, {useContext} from 'react';
import PackageContext from "../Context/PackageContext";
import PackageCard from "./PackageCard";
import {EmptySearch, Package_List, PackageListCenter} from "./PackageElements";

/**
 * Component for list of packages to be generated
 * If the list of packages is empty, generate message.
 * Else, return the list of sorted packages.
 * @returns PackageList component with list of packages
 */
const PackageList = () => {
	const {sortedPackages} = useContext(PackageContext);
	if (sortedPackages.length === 0) {
		return (
			<EmptySearch>
				<h3>Unfortunately no packages matched your search preferences.</h3>
			</EmptySearch>
		)
	}
	return (
		<Package_List>
			<PackageListCenter>
				{sortedPackages.map(item => {
					return <PackageCard key={item.id}
					                    item={item}/>;
				})}
			</PackageListCenter>
		</Package_List>
	);
};

export default PackageList;