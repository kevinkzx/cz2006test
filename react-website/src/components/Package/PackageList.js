import React, {useContext} from 'react';
import PackageContext from "../Context/PackageContext";
import PackageCard from "./PackageCard";
import {EmptySearch, Package_List, PackageListCenter} from "./PackageElements";

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
		// <div>
		// 	{packages.map(item => <PackageCard key={item.sys.id} item={item}/>)}
		// </div>
		<Package_List>
			<PackageListCenter>
				{sortedPackages.map(item=> {
					return <PackageCard key={item.sys.id}
					                    item={item}/>;
				})}
			</PackageListCenter>
		</Package_List>

	);
};

export default PackageList;