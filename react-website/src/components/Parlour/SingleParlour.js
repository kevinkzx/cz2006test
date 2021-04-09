import React, {useContext} from 'react';
import {
    ParlourInfor,
    SingleParlourContainer,
    SingleParlourDesc,
    SingleParlourImage,
    SingleParlourInfo,
} from "./ParlourElement";
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import { ItemDescription } from 'semantic-ui-react';

const SingleParlour = () => {
    const {getParlour} = useContext(ParlourContext);
    let {slug} = useParams();
    const item = getParlour(slug);
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
                        <h3>details</h3>
                        <p>{item.name}</p>
                    </SingleParlourDesc>
                    <ParlourInfor>
                        <h3>Info</h3>
                        <h6>Description : {item.description}</h6>
                    </ParlourInfor>
                </SingleParlourInfo>
            </SingleParlourContainer>
        </div>
    );
};

export default SingleParlour;
