import React, {useContext} from 'react';
import ReviewContext from "../Context/ReviewContext";
import ReviewCard from './ReviewCard';
import {useParams} from "react-router-dom";


const ReviewList = () => {
	const {reviews} = useContext(ReviewContext);
	let {slug} = useParams();

	return (
        <>
            {reviews.map(item => {
				if(item.slug == slug){
					return <ReviewCard key={item.slug} item={item}/>;
				}
			})}


		</>
	);
};

export default ReviewList;