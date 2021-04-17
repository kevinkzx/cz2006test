import React, {useState} from "react";
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import * as ashScatteringData from "./data/ashScatteringData.json";
import Navbar from "../components/Navbar";

/**
 * This function returns the location of ash scattering 
 * If a user clicks on the marker, an infowindow with mroe information would be displayed
 * @returns Marker of the location and info window when user click on the marker
 */
function AshScattering() {
	const [selectedLocation, setSelectedLocation] = useState(null);
	/**
	 * Display the pins of the location
	 * When the user click on a pin, an info window will show more information.
	 */
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{lat: 1.352083, lng: 103.819839}}
		>
			{ashScatteringData.features.map((locations) => (
				<Marker
					key={locations.properties.Name}
					position={{
						lat: locations.geometry.coordinates[1],
						lng: locations.geometry.coordinates[0]
					}}
					onClick={() => {
						setSelectedLocation(locations);
					}}
				/>
			))}

			{selectedLocation && (
				<InfoWindow
					position={{
						lat: selectedLocation.geometry.coordinates[1],
						lng: selectedLocation.geometry.coordinates[0]
					}}
					onCloseClick={() => {
						setSelectedLocation(null);
					}}
				>
					<div>
						<h2>{selectedLocation.properties.Name}</h2>
						<p>{selectedLocation.properties.description}</p>
						<p>
							{selectedLocation.properties.ADDRESSSTREETNAME}
						</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
}

const MapWrapped = withScriptjs(withGoogleMap(AshScattering));
/**
 * Display the map using google map api
 * @returns a map showign the markers.
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