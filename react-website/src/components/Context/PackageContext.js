import React, {createContext, useEffect, useState} from 'react';
import fire from "../../firebase/fire";


const PackageContext = createContext();
export const PackageProvider = ({children}) => {
	const [packages, setPackages] = useState([]);
	const [sortedPackages, setSortedPackages] = useState([]);
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
		return packages.find(item => item.slug === slug);
	}

	useEffect(() => {
		fire.firestore()
		    .collection('Packages')
		    .onSnapshot((snapshot) => {
			    const newPackages = snapshot.docs.map((doc) => ({
				    id: doc.id,
				    ...doc.data()
			    }));
			    setPackages(newPackages);
			    setSortedPackages(newPackages);
		    })
	}, []);

	useEffect(() => {

		setMaxPrice(Math.max(...packages.map(item => parseInt(item.price))));
		setPrice(Math.max(...packages.map(item => parseInt(item.price))));
		setMaxDay(Math.max(...packages.map(item => parseInt(item.days))));
	}, [packages]);


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
			temp = temp.filter(item => item.religion === religion);
		}
		if (location !== "All") {
			temp = temp.filter(item => item.location === location);
		}
		if (casket !== "All") {
			temp = temp.filter(item => item.casket === casket);
		}

		temp = temp.filter(item => parseInt(item.price) <= price);

		temp = temp.filter(item => parseInt(item.days) >= minDay && parseInt(item.days) <= maxDay);

		if (transportation) {
			temp = temp.filter(item => item.transportation === true);
		}

		if (eco) {
			temp = temp.filter(item => item.eco === true);
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