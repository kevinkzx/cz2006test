/*global google*/
import React, { Component, useState, useEffect, useContext } from "react";
import {
	withGoogleMap,
	withScriptjs,
	GoogleMap,
	DirectionsRenderer
} from "react-google-maps";
import ParlourContext from "../Context/ParlourContext";
import {useParams} from "react-router-dom";

/**
 * Component for map component in individual parlour page.
 * Shows the location of the current user and the location of the parlour.
 * Renders the direction by form of driving on the map.
 * @returns Map component
 */
const Map = () => {

	const {getParlour} = useContext(ParlourContext);
	const {slug} = useParams();
	const item = getParlour(slug);
	const [directions, setDirections] = useState(null);
	const [lat, setLat] = useState(0.0);
	const [lng, setLng] = useState(0.0);
	const destlat = item.lat;
	const destlng = item.lng;

	useEffect(() => {
		if (navigator && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				const coords = pos.coords;
				console.log("my current location");
				console.log(coords);
				setLat(coords.latitude);
				setLng(coords.longitude);
			});
		}
	}, [lat,lng])

	const directionsService = new google.maps.DirectionsService();


	console.log("FUCK");

	const origin = {
		lat,
		lng
	};
	const destination = { lat:destlat, lng:destlng };
	console.log(destination);

	directionsService.route(
		{
			origin: origin,
			destination: destination,
			travelMode: google.maps.TravelMode.DRIVING
		},
		(result, status) => {
			if (status === google.maps.DirectionsStatus.OK) {
				setDirections(result);
			} else {
				console.error(`error fetching directions ${result}`);
			}
		}
	);
	const GoogleMapExample = withGoogleMap(props => (
		<GoogleMap
			defaultCenter={{lat: 1.352083, lng: 103.819839}}
			defaultZoom={13}
		>
			<DirectionsRenderer
				directions = {directions}
			/>
		</GoogleMap>))

	return (
		<div>
			<GoogleMapExample
				containerElement={<div style={{ height: `500px`, width: "500px" }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}


export default Map;