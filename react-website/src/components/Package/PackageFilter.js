import React, {useContext} from 'react';
import PackageContext from "../Context/PackageContext";
import {
	PackageFilterForm,
	PackageFilterFormControl,
	PackageFilterFormExtra,
	PackageFilterFormGroup,
	PackageFilterFormInput,
	PackageFilterFormSizeInput,
	PackageFilterFormSizeInputWrapper,
	PackageFilterWrapper
} from "./PackageElements";
import Title from "../Parlour/Title";

const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))];
}

/**
 * Sets the filter according to what the user want
 * User can filter based on religion, location, price, number of days, casket, packages, religion.
 * @returns PackageFilter component
 */
const PackageFilter = () => {
	const context = useContext(PackageContext);
	const {
		setReligion,
		setLocation,
		setPrice,
		setMinDay,
		setMaxDay,
		setCasket,
		setTransportation,
		setEco,
		casket,
		packages,
		religion,
		price,
		minPrice,
		maxPrice,
		transportation,
		location,
		minDay,
		maxDay,
		eco
	} = context;

	//Setting unique religion values
	/**
	 * Sets the unique religion values
	 */
	let religions = getUnique(packages, 'religion');
	religions = ['All', ...religions];
	religions = religions.map((item, index) => {
		return <option value={item}
		               key={index}>{item}</option>;
	});

	/**
	 * Sets the unique location values
	 */
		//Setting unique location values
	let locations = getUnique(packages, 'location');
	locations = ['All', ...locations];
	locations = locations.map((item, index) => {
		return <option value={item}
		               key={index}>{item}</option>;
	});

	/**
	 * Sets the unique casket values
	 */
		//Setting unique casket values
	let caskets = getUnique(packages, 'casket');
	caskets = ['All', ...caskets];
	caskets = caskets.map((item, index) => {
		return <option value={item}
		               key={index}>{item}</option>;
	});
	return (
		<>
			<Title title="Filter Packages"/>
			<div id="searchFilter">
				<PackageFilterWrapper>
					<PackageFilterForm>
						<PackageFilterFormGroup>
							<label htmlFor="religion">Religion</label>
							<PackageFilterFormControl name="religion"
							                          id="religion"
							                          value={religion}
							                          onChange={e => setReligion(e.target.value)}>
								{religions}
							</PackageFilterFormControl>
						</PackageFilterFormGroup>
						<PackageFilterFormGroup>
							<label htmlFor="location2">Location</label>
							<PackageFilterFormControl name="location2"
							                          id="location2"
							                          value={location}
							                          onChange={e => setLocation(e.target.value)}>
								{locations}
							</PackageFilterFormControl>
						</PackageFilterFormGroup>
						<PackageFilterFormGroup>
							<label htmlFor="casket">Casket Type</label>
							<PackageFilterFormControl name="casket"
							                          id="casket"
							                          value={casket}
							                          onChange={e => setCasket(e.target.value)}>
								{caskets}
							</PackageFilterFormControl>
						</PackageFilterFormGroup>
						<PackageFilterFormGroup>
							<label htmlFor="price">package price ${price}</label>
							<PackageFilterFormInput type="range"
							                        name="price"
							                        min={minPrice}
							                        max={maxPrice}
							                        id="price"
							                        value={price}
							                        onChange={e => setPrice(e.target.value)}/>
						</PackageFilterFormGroup>
						<PackageFilterFormGroup>
							<label htmlFor="day">Number of days</label>
							<PackageFilterFormSizeInputWrapper>
								<PackageFilterFormSizeInput
									name="minDay"
									value={minDay}
									onChange={e => setMinDay(e.target.value)}/>
								<PackageFilterFormSizeInput
									name="maxDay"
									value={maxDay}
									onChange={e => setMaxDay(e.target.value)}/>
							</PackageFilterFormSizeInputWrapper>
						</PackageFilterFormGroup>
						<PackageFilterFormGroup>
							<PackageFilterFormExtra>
								<input type="checkbox"
								       name="transportation"
								       id="transportation"
								       checked={transportation}
								       onChange={e => setTransportation(e.target.checked)}/>
								<label htmlFor="transportation">transportation</label>
							</PackageFilterFormExtra>
							<PackageFilterFormExtra>
								<input type="checkbox"
								       name="eco"
								       id="eco"
								       checked={eco}
								       onChange={e => setEco(e.target.checked)}/>
								<label htmlFor="eco">Eco-Friendly</label>
							</PackageFilterFormExtra>
						</PackageFilterFormGroup>
					</PackageFilterForm>
				</PackageFilterWrapper>
			</div>
		</>
	);
};

export default PackageFilter;