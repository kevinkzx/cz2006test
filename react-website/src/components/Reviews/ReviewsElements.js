import styled from "styled-components";


//ReviewCard css

export const Review_Card = styled.article`
    margin: 2rem 20%;
    box-shadow: 2px 5px 3px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.3s linear;
  }
`;



export const Reviewer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #01bf71;
  color: black;
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

export const Date = styled.div`
  top: 0;
  left: 10;
  color: black;
  padding: 0.3rem 0.6rem 0.5rem;
  border-bottom-right-radius: 1rem;
  font-size: 0.5rem;
  text-align: right;
  transition: all 0.3s linear;

  & h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 3px;
  }
`;



export const ReviewContainer = styled.div`
  position: relative;
`;

export const TextContainer = styled.div`
  padding: 2rem;
  font-size: 1.5rem;

`;



export const ReviewTitle = styled.h1`
  color: black;
  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;
`;



export const Header = styled.p`
  background: #01BF71;
  color: black;
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;
`;



