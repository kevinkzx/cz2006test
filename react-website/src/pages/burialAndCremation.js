import React, {useState} from "react";
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import * as burialAndCremationData from "./data/burialAndCremationData.json";
import Navbar from "../components/Navbar";

function BurialAndCremation() {
	const [selectedFacility, setSelectedFacility] = useState(null);

	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{lat: 1.352083, lng: 103.819839}}
		>
			{burialAndCremationData.features.map((facilities) => (
				<Marker
					key={facilities.properties.Name}
					position={{
						lat: facilities.geometry.coordinates[1],
						lng: facilities.geometry.coordinates[0]
					}}
					onClick={() => {
						setSelectedFacility(facilities);
					}}
				/>
			))}

			{selectedFacility && (
				<InfoWindow
					position={{
						lat: selectedFacility.geometry.coordinates[1],
						lng: selectedFacility.geometry.coordinates[0]
					}}
					onCloseClick={() => {
						setSelectedFacility(null);
					}}
				>
					<div>
						<h2>{selectedFacility.properties.Name}</h2>
						<p>{selectedFacility.properties.description}</p>
						<p>
							{selectedFacility.properties.ADDRESSBLOCKHOUSENUMBER}
							{" " + selectedFacility.properties.ADDRESSSTREETNAME}
						</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
}

const MapWrapped = withScriptjs(withGoogleMap(BurialAndCremation));

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