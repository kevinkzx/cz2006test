import React, {useContext} from 'react';
import ReviewCard from './ReviewCard';
import {useParams} from "react-router-dom";
import PackageContext from "../Context/PackageContext";

/**
 * Component for list of reviews for each package
 * @returns ReviewList component
 */
const ReviewList = () => {
	const {getPackage} = useContext(PackageContext);
	let {slug} = useParams();
	const item = getPackage(slug);

	return (
		<>
			{item.reviews.map(item => {
				return <ReviewCard key={item.slug}
				                   item={item}/>;
			})}
		</>
	);
}
;
export default ReviewList;