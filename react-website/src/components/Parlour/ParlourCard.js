import React from 'react'
import {ImgContainer, Parlour_Card, ParlourInfo, ParlourLink} from "./ParlourElement";
import img from '../../images/image8.svg';

/**
 * This component renders the individual parlour card in the list of parlour pages
 * @param {object} item is the individual parlour object
 * @returns ParlourCard component the name of the parlour and the link to the individual parlour page
 */
const ParlourCard = ({item}) => {
    return (
        <Parlour_Card>
            <ImgContainer>
                <img src={img}
                    alt="parlour"/>
                <ParlourLink to={`/parlours/${item.slug}`}>
                    features
                </ParlourLink>
                <ParlourInfo>{item.name}</ParlourInfo>
            </ImgContainer>
        </Parlour_Card>
    );
};
export default ParlourCard;
