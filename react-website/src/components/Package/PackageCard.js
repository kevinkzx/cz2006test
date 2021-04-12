import React from 'react';
import {ImgContainer, Package_Card, PackageInfo, PackageLink, PriceTop} from "./PackageElements";
import img1 from '../../images/svg-1.svg';
import SinglePackage from './SinglePackage';




const handleChange = () => {
	console.log('hello');
};


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
				<PackageInfo>{item.name} 	
					<input type="checkbox"
							name="compare"
							id="compare"
							onChange
							 ={handleChange}/> 
				</PackageInfo>
					
			

			
			</ImgContainer>
		</Package_Card>
	);
};

export default PackageCard;