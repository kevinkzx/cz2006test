import React, {createContext, useState} from 'react';
import items from "../Package/Data";


const PackageContext = createContext();
export const PackageProvider = ({children}) => {
	const [packages, setPackages] = useState(items);
	return (
		<PackageContext.Provider value={packages}>
			{children}
		</PackageContext.Provider>
	);
};

export default PackageContext;