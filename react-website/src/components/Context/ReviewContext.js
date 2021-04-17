import React, {createContext, useState} from 'react';
import items from "../Reviews/ReviewsData";


const ReviewContext = createContext();
/**
 * Context for reviews.
 * @param {object} children 
 * @returns the context of reviews
 */
export const ReviewProvider = ({children}) => {
	const [reviews] = useState(items);

	return (
		<ReviewContext.Provider value={{
			reviews,
		}}>
			{children}
		</ReviewContext.Provider>
	);
};


export default ReviewContext;