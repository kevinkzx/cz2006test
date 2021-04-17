import styled from 'styled-components'


// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 1em;
  margin-top: 5rem;
  margin-bottom: 3em;
  background: black;

  h1 {
    text-align: center;
    font-size: 2em;
    color: ${({boxHeaderColor}) => (boxHeaderColor ? "#01bf71" : "#01bf71")};
  }
`;

