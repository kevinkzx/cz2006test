import React from 'react';
import ReviewContext from '../Context/ReviewContext';
import {Review_Input, ReviewInputContainer, SubmitReviewButton} from "./ReviewsElements"
import {useParams} from "react-router-dom";


const ReviewInput = () => {

	// let {slug} = useParams();
    // const input = useRef(null);


	const handleClickEvent = () => {
        // const input = input.current;
        // const data = {
        //         name: username,
        //         date: Date.now,
        //         slug: slug,
        //         review: input['review'].value,
        //     }
        // createReview(data);
		console.log("Hello")
    }


	return (
		<>
            <ReviewInputContainer> 	

				<Review_Input  placeholder="Leave a review here..."/>
                <SubmitReviewButton onClick={handleClickEvent} type='submit'>Submit</SubmitReviewButton>

			</ReviewInputContainer>
            
		</>
	);
};

export default ReviewInput;