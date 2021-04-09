import React from 'react'
import {ImgContainer, Parlour_Card, ParlourInfo, ParlourLink, PriceTop} from "./ParlourElement";

const ParlourCard = ({item}) => {
    return (
        <Parlour_Card>
            <ImgContainer>
                <img src={item.img}
                    alt="parlour"/>
                <PriceTop>
                    <h6>${item.price}</h6>
                </PriceTop>
                <ParlourLink to={`/parlours/${item.slug}`}>
                    features
                </ParlourLink>
                <ParlourInfo>{item.name}</ParlourInfo>
            </ImgContainer>
        </Parlour_Card>
    );
};
export default ParlourCard;
