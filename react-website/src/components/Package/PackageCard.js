import React from 'react';
import {ImgContainer, PackageInfo, PackageLink, PriceTop, Package_Card} from "./PackageElements";
import {Button} from "../ButtonElements";
const PackageCard = ({item}) => {
	return (
		<Package_Card>
			<ImgContainer>
				<img src={item.fields.img}
				     alt="package image"/>
				<PriceTop>
					<h6>{item.fields.religion}</h6>
					<h6>${item.fields.price}</h6>
				</PriceTop>
				<PackageLink to={`/packages/${item.fields.slug}`}>
					features
				</PackageLink>
				<PackageInfo>{item.fields.name}</PackageInfo>
			</ImgContainer>
		</Package_Card>
	);
};

export default PackageCard;