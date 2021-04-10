import React, {useContext} from 'react';
import {
    ParlourInfor,
    SingleParlourContainer,
    SingleParlourDesc,
    SingleParlourImage,
    SingleParlourInfo,
    GeneralPackagesInfo,
    listItems,
} from "./ParlourElement";
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import { ItemDescription } from 'semantic-ui-react';
import ParlourBooking from "./ParlourBooking";

const SingleParlour = () => {
    const {getParlour} = useContext(ParlourContext);
    let {slug} = useParams();
    const item = getParlour(slug);
    const caskets = item.caskets;
    //const GP = item.generalPackage;
    return (
        <div id="parlourInfo">
            <h1>this the single parlour page</h1>
            <ParlourBooking/>
            <SingleParlourContainer>
                <SingleParlourImage>
                    <img src={item.img}
                        alt="hge"/>
                </SingleParlourImage>
                <SingleParlourInfo>
                    <SingleParlourDesc>
                        <h3>Name</h3>
                        <h6>{item.name}</h6>
                    </SingleParlourDesc>
                    <ParlourInfor>
                        <h3>Details</h3>
                        <h6>Address: {item.description}</h6>
                        <h6>Number: {item.number}</h6>
                    </ParlourInfor>
                    <ParlourInfor>
                        <h3>General Packages</h3>
{/*                         <listItems>
                            {GP.map((item,index) => 
                                <li key={index}> {item}</li>
                            )}
                        </listItems> */}
                    </ParlourInfor>
                    <ParlourInfor>
                        <h3>Caskets</h3>
                        <listItems>
                            {caskets.map((item, index) => (
                                <li key={index}> {item}</li>
                            ))}
                        </listItems>
                    </ParlourInfor>
                </SingleParlourInfo>
            </SingleParlourContainer>
        </div>
    );
};

export default SingleParlour;
