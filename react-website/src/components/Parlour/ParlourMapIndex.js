/*global google*/
import React, { Component, useState, useEffect, useContext } from "react";
import {
	withGoogleMap,
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
	/**
	 * The latitude of the parlour
	 */
	const destlat = item.lat;
	/**
	 * The longitude of the parlour
	 */
	const destlng = item.lng;

	/**
	 * Gets the current latitude and longitude of the user.
	 * The current position where the user is accessing the website from.
	 */
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

	/**
	 * Using DirectionsSerivce() provided by google map api.
	 */
	const directionsService = new google.maps.DirectionsService();

	/**
	 * Set the origin location to where the user is
	 */
	const origin = {
		lat,
		lng
	};
	const destination = { lat:destlat, lng:destlng };
	console.log(destination);

	/**
	 * Function to render the direction from user current location to parlour
	 * The mode of directions render is by driving.
	 * If there is not direction, will not have result
	 */
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
	/**
	 * Display the map with route from origin to location.
	 */
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