import React, {useContext} from 'react';
import PackageContext from "../Context/PackageContext";
import {
	PackageFilterForm,
	PackageFilterFormControl, PackageFilterFormExtra,
	PackageFilterFormGroup, PackageFilterFormInput, PackageFilterFormSizeInput, PackageFilterFormSizeInputWrapper,
	PackageFilterWrapper
} from "./PackageElements";

const getUnique = (items, access, value) => {
	return [...new Set(items.map(item => item[access][value]))];
}


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
		casket,
		packages,
		religion,
		price,
		minPrice,
		maxPrice,
		transportation,
		location,
		minDay,
		maxDay
	} = context;

	//Setting unique religion values
	let religions = getUnique(packages, 'fields', 'religion');
	religions = ['All', ...religions];
	religions = religions.map((item, index) => {
		return <option value={item}
		               key={index}>{item}</option>;
	});

	//Setting unique location values
	let locations = getUnique(packages, 'fields', 'location');
	locations = ['All', ...locations];
	locations = locations.map((item, index) => {
		return <option value={item}
		               key={index}>{item}</option>;
	});

	//Setting unique casket values
	let caskets = getUnique(packages, 'fields', 'casket');
	caskets = ['All', ...caskets];
	caskets = caskets.map((item, index) => {
		return <option value={item}
		               key={index}>{item}</option>;
	});
	return (
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
						<label htmlFor="location">Location</label>
						<PackageFilterFormControl name="location"
						                          id="location"
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
					</PackageFilterFormGroup>
				</PackageFilterForm>
			</PackageFilterWrapper>
		</div>
	);
};

export default PackageFilter;