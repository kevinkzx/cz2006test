import React, {useContext} from 'react';
import {
	PackageInfor,
	SinglePackageContainer,
	SinglePackageDesc,
	SinglePackageImage,
	SinglePackageInfo
} from "./PackageElements";
import {useParams} from "react-router-dom";
import PackageContext from "../Context/PackageContext";

const SinglePackage = () => {
	const {getPackage} = useContext(PackageContext);
	let {slug} = useParams();
	const item = getPackage(slug);
	return (
		<div id="packageInfo">
			<SinglePackageContainer>
				<SinglePackageImage>
					<img src={item.fields.img}
					     alt="hge"/>
				</SinglePackageImage>
				<SinglePackageInfo>
					<SinglePackageDesc>
						<h3>Religion</h3>
						<p>{item.fields.religion}</p>
					</SinglePackageDesc>
					<PackageInfor>
						<h3>Info</h3>
						<h6>price : ${item.fields.price}</h6>
						<h6>Location: {item.fields.location}</h6>
						<h6>Number of days: {item.fields.days}</h6>
						<h6>Transportation: {item.fields.transportation ? "Included" : "Not included"}</h6>
						<h6>Casket Type: {item.fields.casket}</h6>
						<h6>Eco-Friendly? {item.fields.eco ? "Yes" : "No"}</h6>
					</PackageInfor>
				</SinglePackageInfo>
			</SinglePackageContainer>
		</div>
	);
};

export default SinglePackage;