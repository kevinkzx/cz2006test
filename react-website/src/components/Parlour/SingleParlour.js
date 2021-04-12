import React, {useContext} from 'react';
import {
    ParlourInfor,
    SingleParlourContainer,
    SingleParlourDesc,
    SingleParlourImage,
    SingleParlourInfo,
    ListItems,
} from "./ParlourElement";
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import { ItemDescription } from 'semantic-ui-react';

const SingleParlour = () => {
    const {getParlour} = useContext(ParlourContext);
    let {slug} = useParams();
    const item = getParlour(slug);
    const caskets = item.caskets;
    const GP = item.generalPackages;
    return (
        <div id="parlourInfo">
            <h1>this the single parlour page</h1>
            <SingleParlourContainer>
                <SingleParlourImage>
                    <img src={item.img}
                        alt="hge"/>
                </SingleParlourImage>
                <SingleParlourInfo>
                    <SingleParlourDesc>
                        <h3>Details</h3>
                        <p>{item.name}</p>
                    </SingleParlourDesc>
                    <ParlourInfor>
                        <h3>Information</h3>
                        <h6>Description : {item.description}</h6>
                        <h6>Number : {item.number}</h6>
                    </ParlourInfor>
                    <ParlourInfor>
                        <h3>General Packages</h3>
                        <ListItems>
                            {GP.map((item,index) =>
                                <li key={index}> - {item}</li>
                            )}
                        </ListItems>
                    </ParlourInfor>
                    <ParlourInfor>
                        <h3>Caskets</h3>
                        <ListItems>
                            {caskets.map((item, index) => (
                                <li key={index}> - {item}</li>
                            ))}
                        </ListItems>
                    </ParlourInfor>
                </SingleParlourInfo>
            </SingleParlourContainer>
        </div>
    );
};

export default SingleParlour;
