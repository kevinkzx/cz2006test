import React, {createContext, useEffect, useState} from 'react';
import items from "../Package/Data";


const PackageContext = createContext();
export const PackageProvider = ({children}) => {
	const [packages] = useState(items);
	const [sortedPackages, setSortedPackages] = useState(items);
	const [religion, setReligion] = useState('All');
	const [location, setLocation] = useState('All');
	const [minPrice] = useState(0);
	const [price, setPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	const [minDay, setMinDay] = useState(0);
	const [maxDay, setMaxDay] = useState(0);
	const [casket, setCasket] = useState('All');
	const [transportation, setTransportation] = useState(false);
	const [eco, setEco] = useState(false);

	const getPackage = (slug) => {
		return packages.find(item => item.fields.slug === slug);
	}

	useEffect(() => {
		setMaxPrice(Math.max(...packages.map(item => item.fields.price)));
		setPrice(Math.max(...packages.map(item => item.fields.price)));
		setMaxDay(Math.max(...packages.map(item => item.fields.days)));
	}, []);


	useEffect(() => {
		setSortedPackages(packages);
		if (minDay < 0) {
			setMinDay(0);
		}
		filterPackages();
	}, [religion, location, price, maxDay, minDay, casket, transportation, eco]);

	const filterPackages = () => {
		let temp = packages;
		if (religion !== "All") {
			temp = temp.filter(item => item.fields.religion === religion);
		}
		if (location !== "All") {
			temp = temp.filter(item => item.fields.location === location);
		}
		if (casket !== "All") {
			temp = temp.filter(item => item.fields.casket === casket);
		}

		temp = temp.filter(item => item.fields.price <= price);

		temp = temp.filter(item => item.fields.days >= minDay && item.fields.days <= maxDay);

		if (transportation) {
			temp = temp.filter(item => item.fields.transportation === true);
		}

		if (eco) {
			temp = temp.filter(item => item.fields.eco === true);
		}
		setSortedPackages(temp);
	}

	return (
		<PackageContext.Provider value={{
			packages,
			sortedPackages,
			price,
			minPrice,
			maxPrice,
			minDay,
			maxDay,
			transportation,
			eco,
			getPackage,
			setReligion,
			setLocation,
			setPrice,
			setMinDay,
			setMaxDay,
			setCasket,
			setTransportation,
			setEco
		}}>
			{children}
		</PackageContext.Provider>
	);
};


export default PackageContext;