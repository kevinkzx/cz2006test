//import React from 'react';
import React, {useContext} from 'react';
import ParlourContext from "../Context/ParlourContext";
import {useParams} from "react-router-dom";

const ParlourBooking = () => {
    const {orders} = useContext(ParlourContext);
    const {getParlour} = useContext(ParlourContext);
    let {slug} = useParams();
    const item = getParlour(slug);
    const {setOrders} = useContext(ParlourContext);
    const result = localStorage.getItem('myorders');

    function testfunction() {
        console.log(item.name);
        var thisorder = {"name":item.name,"number":item.number}
        setOrders(thisorder);
    };

    function objectfunction() {
        console.log(JSON.parse(result));
        var myobject = JSON.parse(result);
        console.log(myobject.name);
    };

    return (
        <div>
            <button onClick={testfunction}>click here to engage parlour</button>
            <button onClick={objectfunction}>click here to make object</button>
            <h1>Booking component</h1>
        </div>
    );
};

export default ParlourBooking;
