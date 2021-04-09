import React from 'react'
import {ImgContainer, Parlour_Card, ParlourInfo, ParlourLink, PriceTop} from "./ParlourElement";

const ParlourCard = ({item}) => {
    return (
        <Parlour_Card>
            <ImgContainer>
                <img src={item.fields.img}
                    alt="parlour"/>
                <PriceTop>
                    <h6>${item.fields.price}</h6>
                </PriceTop>
                <ParlourLink to={`/parlours/${item.fields.slug}`}>
                    features
                </ParlourLink>
                <ParlourInfo>{item.fields.name}</ParlourInfo>
            </ImgContainer>
        </Parlour_Card>
    );
};
export default ParlourCard;
