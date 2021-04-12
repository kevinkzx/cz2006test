import React, {useContext} from 'react'
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import ParlourForm from "./ParlourForm";
import ParlourFormContext from "../Context/ParlourFormContext";
import {FormGrid} from "./ParlourElement";
import ParlourFormCaskets from "./ParlourFormCaskets";
import ParlourFormButton from "./ParlourFormButton";
import AuthContext from "../Context/AuthContext";

const ParlourBooking = () => {
    const {getParlour} = useContext(ParlourContext);
    let {slug} = useParams();
    const item = getParlour(slug);
    const caskets = item.caskets;
    const GP = item.generalPackages;
    const myorder = useContext(ParlourFormContext);
    const {user} = useContext(AuthContext);
    if (user !== null) {
        console.log(user.email);
        console.log(myorder.generalP);
        console.log(myorder.caskets);
        console.log(myorder.address);
    }
    

    return (
        <div>
            <h1>Fill in the form below to engage a parlour</h1>
            <FormGrid>
                <ParlourForm/>
                <ParlourFormCaskets/>
                <ParlourFormButton/>
            </FormGrid>
            
        </div>
    );
};

export default ParlourBooking;