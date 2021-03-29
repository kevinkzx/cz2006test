import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import * as burialAndCremationData from "./data/burialandcremation.json";

function burialAndCremation() {

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 1.352083, lng: 103.819839 }}

        >
            {burialAndCremationData.features.map((facilities) => (
                <Marker
                    key={facilities.properties.Name}
                    position={{
                        lat: facilities.geometry.coordinates[1],
                        lng: facilities.geometry.coordinates[0]
                    }}
                />
            ))}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(burialAndCremation));

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