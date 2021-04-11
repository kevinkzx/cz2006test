import React from 'react';
import ReviewContext from '../Context/ReviewContext';
import {Review_Input, ReviewInputContainer, SubmitReviewButton} from "./ReviewsElements"
import {useParams} from "react-router-dom";


const ReviewInput = () => {

	// let {slug} = useParams();
	// const {user, email, booking} = useContext(AuthContext);


    
	return (
		<>
            <ReviewInputContainer> 	
				<Review_Input placeholder="Leave a review here..."/>
                <SubmitReviewButton type='submit'>Submit</SubmitReviewButton>

			</ReviewInputContainer>
            
		</>
	);
};

export default ReviewInput;