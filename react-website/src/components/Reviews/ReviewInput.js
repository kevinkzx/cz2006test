import React, {useContext, useEffect, useRef, useState} from 'react';
import {Review_Input, ReviewInputContainer, SubmitReviewButton} from "./ReviewsElements"
import {useParams} from "react-router-dom";
import PackageContext from "../Context/PackageContext";
import AuthContext from "../Context/AuthContext";


const ReviewInput = () => {

	let {slug} = useParams();
	const {getPackage, updateReview} = useContext(PackageContext);
	const {email} = useContext(AuthContext);
	const item = getPackage(slug);
	const [input, setInput] = useState("");

	// const input = useRef(null);


	const handleClickEvent = (event) => {
		event.preventDefault();
		updateReview(email, input, item.id);
		setInput("");
		console.log(input)
	}


	return (
		<>
			<ReviewInputContainer>

				<Review_Input onChange={(e) => setInput(e.target.value)}
				              placeholder="Leave a review here..."/>
				<SubmitReviewButton onClick={handleClickEvent}
					type='submit'>Submit</SubmitReviewButton>

			</ReviewInputContainer>

		</>
	);
};

export default ReviewInput;