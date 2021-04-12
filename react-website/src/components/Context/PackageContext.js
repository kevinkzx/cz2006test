import React, {createContext, useEffect, useState} from 'react';
import fire from "../../firebase/fire";
import firebase from "firebase";


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
		const unsubscribe = fire.firestore()
		                        .collection('Packages')
		                        .orderBy("name")
		                        .onSnapshot((snapshot) => {
			                        const newPackages = snapshot.docs.map((doc) => ({
				                        id: doc.id,
				                        ...doc.data()
			                        }));
			                        setPackages(newPackages);
			                        setSortedPackages(newPackages);
		                        })
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		setMaxPrice(Math.max(...packages.map(item => parseInt(item.price))));
		setPrice(Math.max(...packages.map(item => parseInt(item.price))));
		setMaxDay(Math.max(...packages.map(item => parseInt(item.days))));
	}, [packages]);


	useEffect(() => {
		setSortedPackages(packages);
		checkDays();
		filterPackages();
	}, [religion, location, price, maxDay, minDay, casket, transportation, eco]);

	const updateReview = (email, input, packageId) => {
		fire.firestore()
		    .collection("Packages")
		    .doc(packageId)
		    .update(
			    {
				    reviews: firebase.firestore.FieldValue.arrayUnion(
					    {
						    email,
						    review: input,
						    created: firebase.firestore.Timestamp.now()
					    }
				    )
			    }
		    )
		    .then(r => {
			    console.log("Success update of review.")
		    })
	}

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

	const checkDays = () => {
		if (minDay < 0) {
			setMinDay(0);
		}
		if (maxDay < minDay) {
			setMaxDay(minDay);
		}
		if (maxDay < 0) {
			setMaxDay(0);
		}
	};

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
			setEco,
			updateReview
		}}>
			{children}
		</PackageContext.Provider>
	);
};


export default PackageContext;