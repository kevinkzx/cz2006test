import React from "react";
import {SearchTitle} from "./ParlourElement";

/**
 * Component for user input of parlour to search for.
 * @param {obect} title 
 * @returns Title component
 */
const Title = ({title}) => {
	return (
		<SearchTitle>
			<h4>{title}</h4>
			<div/>
		</SearchTitle>
	);
};

export default Title;