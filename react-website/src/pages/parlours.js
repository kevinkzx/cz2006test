import React, {useState} from "react";
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import * as parloursData from "./data/funeralParlourData.json";
import Navbar from "../components/Navbar";
/**
 * This function returns the location of parlours
 * If a user clicks on the marker, an infowindow with more information would be displayed.
 * @returns Marker of the location and info window when user click on the marker
 */
function Parlours() {
	const [selectedParlour, setSelectedParlour] = useState(null);
	/**
	 * Displays the pin of the parlour.
	 * If user clicks on the pin, a info window will be displayed, showing more information.
	 */
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{lat: 1.352083, lng: 103.819839}}
		>
			{parloursData.features.map((parlour) => (
				<Marker
					key={parlour.properties.Name}
					position={{
						lat: parlour.geometry.coordinates[1],
						lng: parlour.geometry.coordinates[0]
					}}
					onClick={() => {
						setSelectedParlour(parlour);
					}}
				/>
			))}

			{selectedParlour && (
				<InfoWindow
					position={{
						lat: selectedParlour.geometry.coordinates[1],
						lng: selectedParlour.geometry.coordinates[0]
					}}
					onCloseClick={() => {
						setSelectedParlour(null);
					}}
				>
					<div>
						<h2>{selectedParlour.properties.Name}</h2>
						<p>{selectedParlour.properties.ADDRESSBUILDINGNAME}</p>
						<p>
							{selectedParlour.properties.ADDRESSBLOCKHOUSENUMBER}
							{" " + selectedParlour.properties.ADDRESSSTREETNAME}
							{", S(" + selectedParlour.properties.ADDRESSPOSTALCODE + ")"}
						</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	)
		;
}

const MapWrapped = withScriptjs(withGoogleMap(Parlours));
/**
 * Display the map using google map api
 * @returns a map showing the markers.
 */
export default function App() {
	let googleKey = {REACT_APP_GOOGLE_KEY: `AIzaSyDQqDdByz7RV0721d5rYNfU7HWo98LiTr0`}
	return (
		<>
			<Navbar/>
			<div style={{width: "100vw", height: "100vh"}}>
				<MapWrapped
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
						googleKey.REACT_APP_GOOGLE_KEY
					}`}
					loadingElement={<div style={{height: `100%`}}/>}
					containerElement={<div style={{height: `100%`}}/>}
					mapElement={<div style={{height: `100%`}}/>}
				/>
			</div>
		</>
	);
}