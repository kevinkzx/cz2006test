import React from 'react';
import {ImgContainer, Package_Card, PackageInfo, PackageLink, PriceTop} from "./PackageElements";
import img1 from '../../images/svg-1.svg';

/**
 * Component for each package in list of packages
 * Shows the religion, price the link to each individual package page.
 * @param {object} item the package that we want
 * @returns PackageCard component.
 */
const PackageCard = ({item}) => {


	return (

		<Package_Card>
			<ImgContainer>
				<img src={img1}
				     alt="package"/>
				<PriceTop>
					<h6>{item.religion}</h6>
					<h6>${item.price}</h6>
				</PriceTop>
				<PackageLink to={`/packages/${item.slug}`}>
					features
				</PackageLink>
				<PackageInfo>{item.name}</PackageInfo>
			</ImgContainer>
		</Package_Card>
	);
};

export default PackageCard;