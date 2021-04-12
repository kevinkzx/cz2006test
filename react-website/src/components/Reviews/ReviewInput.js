import React, {useContext, useState} from 'react';
import {Review_Input, ReviewInputContainer, SubmitReviewButton} from "./ReviewsElements"
import {useParams} from "react-router-dom";
import PackageContext from "../Context/PackageContext";
import AuthContext from "../Context/AuthContext";
import {useAlert} from "react-alert";


const ReviewInput = () => {

	let {slug} = useParams();
	const {getPackage, updateReview} = useContext(PackageContext);
	const {user} = useContext(AuthContext);
	const item = getPackage(slug);
	const [input, setInput] = useState("");
	const alert = useAlert();
	// const input = useRef(null);


	const handleClickEvent = (event) => {
		event.preventDefault();
		if (!input) {
			alert.show("Please write a review first before submitting.")
		} else if (!user) {
			alert.show("Please log in first.")
		} else {
			updateReview(user.email, input, item.id);
			setInput("");
			console.log(input);
		}
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