import React, {useState} from 'react';

/**
 * Component for input field
 * @param {object} name, name of the input field
 * @param {object} label, label of the input field 
 * @returns an input field for user to input their details.
 */
export default function InputField({name, label}) {
	const [state, setState] = useState('');
	return (
		<div>
			<label>{label}</label>
			<input type="text"
			       value={state}
			       name={name}
			       onChange={(e) => setState(e.target.value)}/>

			{state}
		</div>
	);
}