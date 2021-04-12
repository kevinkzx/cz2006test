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

const Map = () => {
    // state = {
    //     directions: null,
    //     currentLocation: {
    //         lat: 0.0,
    //         lng: 0.0
    //     }
        // };

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

    // componentDidMount() {
    //     if (navigator && navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(pos => {
    //             const coords = pos.coords;
    //             console.log("my current location");
    //             console.log(coords);
    //             this.setState({
    //                 currentLocation: {
    //                     lat: coords.latitude,
    //                     lng: coords.longitude
    //                 }
    //             });
                
    //         });
    //     } else {
    //         this.setState({
    //             currentLocation: {
    //                 lat: 1.3442459,
    //                 lng: 103.6781355
    //             }
    //         });
    //     }
        
        //console.log(this.state['currentLocation']['lat']);
        const directionsService = new google.maps.DirectionsService();

        // const origin = this.state['currentLocation'];
        // console.log(origin);
        console.log("FUCK");
        //console.log(item.lat);
        //console.log(item.lng);
        //console.log(typeof(lat));
        //console.log(lng);
        const origin = {
            lat,
            lng
        };
        //console.log(origin)
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
        // console.log(this.state['currentLocation']['lat']);
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
    

    // render() {
        // const GoogleMapExample = withGoogleMap(props => (
        //     <GoogleMap
        //         defaultCenter={{lat: 1.352083, lng: 103.819839}}
        //         defaultZoom={13}
        //     >
        //         <DirectionsRenderer
        //             directions={this.state.directions}
        //         />
        //     </GoogleMap>))
    //     ));

        // return (
        //     <div>
        //         <GoogleMapExample
        //             containerElement={<div style={{ height: `500px`, width: "500px" }} />}
        //             mapElement={<div style={{ height: `100%` }} />}
        //         />
        //     </div>
        // );
    // }

// }
    

export default Map;