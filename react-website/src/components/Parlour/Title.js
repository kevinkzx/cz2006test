import React from "react";
import {SearchTitle} from "./ParlourElement";

/**
 * Component to display a title
 * @param {obect} title component for user to input the title
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