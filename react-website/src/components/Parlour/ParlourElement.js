import styled from "styled-components";
import {Link} from 'react-router-dom';
import {Button} from "../ButtonElements";
// --primaryColor: #af9a7d;
// --mainWhite: #fff;
// --offWhite: #f7f7f7;
// --mainBlack: #222;
// --mainGrey: #ececec;
// --darkGrey: #cfcfcf;
// --mainTransition: all 0.3s linear;
// --mainSpacing: 3px;
// --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
// --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);

//Package List CSS
export const EmptySearch = styled.div`
  text-align: center;
  text-transform: capitalize;
  margin: 2rem 0;
  padding: 1rem;
  letter-spacing: 3px;
`;

export const Parlour_List = styled.section`
  padding: 5rem 0;
`;

export const ParlourListCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
`;

// PackageCard CSS

export const Parlour_Card = styled.article`
  box-shadow: 2px 5px 3px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;

  &:hover {
    box-shadow: 4px 10px 5px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const ParlourLink = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  transition: all 0.3s linear;
`;


export const PriceTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.3rem 0.6rem 0.5rem;
  border-bottom-right-radius: 1rem;
  font-size: 0.5rem;
  text-align: center;
  transition: all 0.3s linear;

  & h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 3px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  
  & img {
    width: 100%;
    display: block;
    transition: all 0.3s linear;
  }
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &:hover img {
   opacity: 0.3;
  }

  &:hover ${PriceTop} {
    opacity: 0;
  }

  &:hover ${ParlourLink} {
    transform: translate(-50%, -50%) scale(1);
  }
  
`;

export const ParlourInfo = styled.p`
  background: grey;
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;
`;

export const btnPrimary = styled.div`
display: inline-block;
text-decoration: none;
letter-spacing: var(--mainSpacing);
color: var(--mainBlack);
background: var(--primaryColor);
padding: 0.4rem 0.9rem;
border: 3px solid var(--primaryColor);
transition: var(--mainTransition);
text-transform: uppercase;
cursor: pointer;
`;

export const SingleParlourContainer = styled.section`
  padding: 5rem 0 0 0;
`;

export const SingleParlourImage = styled.div`
  width: 50vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;

  img {
    width: 100%;
    display: block;
  }
`;

export const SingleParlourInfo = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 13ch auto;
  justify-content: space-evenly;
  margin: 2rem auto;
`;

export const SingleParlourDesc = styled.article`
  margin: 1rem 0;

  h3 {
    text-transform: capitalize;
    letter-spacing: 3px;
    font-size: x-large;
  }

  h6 {
    font-weight: 300;
    font-size: medium;
    line-height: 1.5;
  }

  p {
    line-height: 1.5;
    font-size: medium;
  }
`;

export const ParlourInfor = styled.article`
  margin: 1rem 0;

  h3 h6 {
    text-transform: capitalize;
    letter-spacing: 3px;
  }

  h3 {
    font-size: x-large;
  }

  h6 {
    font-weight: 300;
    font-size: medium;
    line-height: 1.5;
  }
`;

export const GeneralPackagesInfo = styled.article`
  margin: 2rem 0;

  h3 h6 {
    text-transform: capitalize;
    letter-spacing: 3px;
  }

  h3 {
    font-size: x-large;
  }

  h6 {
    font-weight: 300;
    font-size: medium;
    line-height: 1.5;
  }
`;

export const listItems = styled.article`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
`;


