/*global google*/
import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";

class Map extends Component {
    state = {
        directions: null,
        currentLocation: {
            lat: 1.3442459,
            lng: 103.6781355
        }
    };

    componentDidMount() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords;
                console.log("my current location");
                console.log(coords);
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                });
                
            });
        } else {
            this.setState({
                currentLocation: {
                    lat: 1.3442459,
                    lng: 103.6781355
                }
            });
        }
        
        console.log(this.state['currentLocation']['lat']);
        const directionsService = new google.maps.DirectionsService();

        const origin = this.state['currentLocation'];
        const destination = { lat: 1.361364, lng: 103.837977 };

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
        console.log(this.state['currentLocation']['lat']);
    }
    

    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 1.352083, lng: 103.819839}}
                defaultZoom={13}
            >
                <DirectionsRenderer
                    directions={this.state.directions}
                />
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: `500px`, width: "500px" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }

}

export default Map;