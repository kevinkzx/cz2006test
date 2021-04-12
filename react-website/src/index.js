import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider} from "./components/Context/AuthContext";
import {transitions, positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {ParlourFormProvider} from "./components/Context/ParlourFormContext";

const options = {
	position: positions.BOTTOM_CENTER,
	timeout: 5000,
	offest: '30px',
	transition: transitions.SCALE
}

ReactDOM.render(
	<ParlourFormProvider>
		<AlertProvider template={AlertTemplate} {...options}>
			<AuthProvider>
				<App/>
			</AuthProvider>
		</AlertProvider>
	</ParlourFormProvider>,
	
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
