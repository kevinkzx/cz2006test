import React, {createContext, useState} from 'react';
import items from "../Package/Data";


const PackageContext = createContext();
export const PackageProvider = ({children}) => {
	const [packages, setPackages] = useState(items);
	const [sortedPackages, setSortedPackages] = useState(items);

	const getPackage = (slug) =>{
		return packages.find(item => item.fields.slug === slug);
	}
	return (
		<PackageContext.Provider value={{packages, sortedPackages, getPackage}}>
			{children}
		</PackageContext.Provider>
	);
};



export default PackageContext;