import React, {createContext, useState} from 'react';
import items from "../Package/Data";


const PackageContext = createContext();
export const PackageProvider = ({children}) => {
	const [packages, setPackages] = useState(items);
	const [sortedPackages, setSortedPackages] = useState(items);
	return (
		<PackageContext.Provider value={{packages : packages, sortedPackages: sortedPackages}}>
			{children}
		</PackageContext.Provider>
	);
};

export default PackageContext;