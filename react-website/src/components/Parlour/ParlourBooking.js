import React, {useContext} from 'react'
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import ParlourForm from "./ParlourForm";
import ParlourFormContext from "../Context/ParlourFormContext";
import {FormGrid} from "./ParlourElement";


const ParlourBooking = () => {
    const {getParlour} = useContext(ParlourContext);
    let {slug} = useParams();
    const item = getParlour(slug);
    const caskets = item.caskets;
    const GP = item.generalPackages;
    const myorder = useContext(ParlourFormContext);

    

    return (
        <div>
            <h1>Fill in the form below to engage a parlour</h1>
            <h1>this is the value im looking for</h1> : {myorder.generalP}
            <FormGrid>
                <ParlourForm/>
                <ParlourForm/>
            </FormGrid>
            
        </div>
    );
};

export default ParlourBooking;