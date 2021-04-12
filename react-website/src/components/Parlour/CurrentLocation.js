import React, {Component} from "react";
class CurrentLocation extends Component {
    constructor(props){
        super(props);

        this.map = null;
        this.marker = null;

        this.state = {
            currentLocation: {
                lat: 0.0,
                lng: 0.0
            }
        };
    }

    componentDidMount() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                });
                this.setPin(coords.latitude, coords.longitude)
            });

            this.map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 1.352083, lng: 103.819839},
            })
        }
    }
}