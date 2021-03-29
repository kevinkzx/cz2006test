import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import * as ashScatteringData from "./data/inland-ash-scattering-gardens.json";

function ashScatteringLocations() {

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 1.352083, lng: 103.819839 }}

        >
            {ashScatteringData.features.map((ashScattering) => (
                <Marker
                    key={ashScattering.properties.Name}
                    position={{
                        lat: ashScattering.geometry.coordinates[1],
                        lng: ashScattering.geometry.coordinates[0]
                    }}
                />
            ))}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(ashScatteringLocations));

export default function App() {
    let googleKey = {REACT_APP_GOOGLE_KEY:`AIzaSyDQqDdByz7RV0721d5rYNfU7HWo98LiTr0`}
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    googleKey.REACT_APP_GOOGLE_KEY
                }`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}