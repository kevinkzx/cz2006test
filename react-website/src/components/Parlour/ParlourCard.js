import React from 'react'
import {ImgContainer, Parlour_Card, ParlourInfo, ParlourLink} from "./ParlourElement";
import img from '../../images/image8.svg';

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
