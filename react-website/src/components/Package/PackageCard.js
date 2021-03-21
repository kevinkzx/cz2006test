import React from 'react';

const PackageCard = ({item}) => {
	return (
		<div>
			<h3>{item.fields.name}</h3>
			<p>{item.fields.price}</p>
			<p>{item.fields.religion}</p>
			<p>Transportation {item.fields.transportation ? "Available" : "Not Available"}</p>
		</div>
	);
};

export default PackageCard;