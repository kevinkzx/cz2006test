import React, {useContext} from 'react';
import img1 from '../../images/svg-1.svg';
import {
	PackageInfor,
	SinglePackageContainer,
	SinglePackageDesc,
	SinglePackageImage,
	SinglePackageInfo,

} from "./PackageElements";
import {useParams} from "react-router-dom";
import PackageContext from "../Context/PackageContext";
import ReviewList from '../Reviews/ReviewList';
import {ReviewTitle} from '../Reviews/ReviewsElements';


/**
 * Component for each package in their individual packages page.
 * Gets the packages by their slug and show the information of the packages.
 * @returns SinglePackage component.
 */

const SinglePackage = () => {
	const {getPackage} = useContext(PackageContext);
	let {slug} = useParams();
	const item = getPackage(slug);


	return (
		<div id="packageInfo">
			<SinglePackageContainer>
				<SinglePackageImage>
					<img src={img1}
					     alt="img1"/>
				</SinglePackageImage>
				<SinglePackageInfo>
					<SinglePackageDesc>
						<h3>Religion</h3>
						<p>{item.religion}</p>
					</SinglePackageDesc>
					<PackageInfor>
						<h3>Info</h3>
						<h6>price : ${item.price}</h6>
						<h6>Location: {item.location}</h6>
						<h6>Number of days: {item.days}</h6>
						<h6>Transportation: {item.transportation ? "Included" : "Not included"}</h6>
						<h6>Casket Type: {item.casket}</h6>
						<h6>Eco-Friendly? {item.eco ? "Yes" : "No"}</h6>
					</PackageInfor>
				</SinglePackageInfo>
				<ReviewTitle>Reviews</ReviewTitle>
				<ReviewList/>
			</SinglePackageContainer>
		</div>
	);
};

export default SinglePackage;