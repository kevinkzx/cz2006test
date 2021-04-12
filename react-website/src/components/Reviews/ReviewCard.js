import React, {useContext} from 'react';
import {TextContainer, Date, ReviewContainer, Reviewer, Review_Card} from './ReviewsElements';
import {useParams} from "react-router-dom";


import ReviewContext from '../Context/ReviewContext'


const ReviewCard = ({item}) => {

	return (
		<Review_Card>
			<ReviewContainer>

				<Reviewer>
					<h6><strong>{item.email}</strong></h6>
				</Reviewer>

				<Date>
					<h6>{item.created.toDate()
					         .toLocaleDateString()}</h6>
				</Date>

				<TextContainer>
					<h6> {item.review} </h6>
				</TextContainer>

			</ReviewContainer>

		</Review_Card>
	);
};

export default ReviewCard;