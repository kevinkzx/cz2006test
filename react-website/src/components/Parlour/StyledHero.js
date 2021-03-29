import styled from 'styled-components';
import defaultImg from '../../images/trinitycasket.JPG';

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img}) center/cover;
    cover no-repeat;
    display: block;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: null;
    height: null;
    resizeMode: 'contain';
`;

export default StyledHero;