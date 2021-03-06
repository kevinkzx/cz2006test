import styled from "styled-components";
import {Button} from "../ButtonElements";
import Button1 from "@material-ui/core/Button";

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
  background: #01BF71;
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
  margin-bottom: 100px;
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
  grid-template-columns: 40ch auto;
  grid-column-gap: 3rem;
  justify-content: space-evenly;
  margin: 2rem auto;
`;

export const SingleParlourDesc = styled.article`
  margin: 1rem 0;

  h3 {
    text-transform: capitalize;
    letter-spacing: 3px;
    font-size: x-large;
    margin-bottom: 10px;
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
    margin-bottom: 10px;
    
  }

  h6 {
    font-weight: 300;
    font-size: medium;
    line-height: 1.5;
  }
`;

export const ListItems = styled.article`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1.5rem;
  margin-top: 2rem;
  

`;

export const FormGrid = styled.div`
  width: 80vw;
  display: flex;
  grid-template-columns: 8ch auto;
  justify-content: space-evenly;
  margin: 2rem auto;
`;

export const SearchTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 2rem;


  h4 {
    font-size: 2rem;
    letter-spacing: 3px;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  div {
    width: 5rem;
    height: 5px;
    margin: 0 auto;
    background: #01BF71;
  }
`;

export const SearchBar = styled.div`
  margin-left: 30%;
  margin-bottom: 7rem;

  input {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 50%;
    background: #f1f1f1;
  }

  button {
    float: left;
    width: 8%;
    padding: 10px;
    background: #01BF71;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none; /* Prevent double borders */
    cursor: pointer;

    &:hover {
      background: black;
    }
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ParlourBookingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

