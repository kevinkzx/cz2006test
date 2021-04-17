import React from 'react';

import {
	ServicesCard,
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesIcon,
	ServicesP,
	ServicesWrapper
} from './ServicesElements';

/**
 * This component displays the individual boxes for location and information.
 * Renders the box, image and name of each individual box.
 * @param {*} param0 
 * @returns Services component.
 */
const Services = ({
	                  id,
	                  backgroundColor,
	                  headerColor,
	                  boxColor,
	                  boxHeaderColor,
	                  boxTextColor,
	                  header,
	                  box1Header,
	                  box1Text,
	                  box1Img,
	                  box1Alt,
	                  box1Path,
	                  box2Header,
	                  box2Text,
	                  box2Img,
	                  box2Alt,
	                  box2Path,
	                  box3Header,
	                  box3Text,
	                  box3Img,
	                  box3Alt,
	                  box3Path,
                  }) => {

	return (

		<ServicesContainer id={id}
		                   backgroundColor={backgroundColor}>
			<ServicesH1 headerColor={headerColor}>{header}</ServicesH1>
			<ServicesWrapper>
				<ServicesCard to={box1Path}
				              boxColor={boxColor}>
					<ServicesIcon src={box1Img}
					              alt={box1Alt}/>
					<ServicesH2 boxHeaderColor={boxHeaderColor}>{box1Header}</ServicesH2>
					<ServicesP boxTextColor={boxTextColor}>{box1Text}</ServicesP>
				</ServicesCard>
				<ServicesCard to={box2Path}
				              boxColor={boxColor}>
					<ServicesIcon src={box2Img}
					              alt={box2Alt}/>
					<ServicesH2 boxHeaderColor={boxHeaderColor}>{box2Header}</ServicesH2>
					<ServicesP boxTextColor={boxTextColor}>{box2Text}</ServicesP>
				</ServicesCard>
				<ServicesCard to={box3Path}
				              boxColor={boxColor}>
					<ServicesIcon src={box3Img}
					              alt={box3Alt}/>
					<ServicesH2 boxHeaderColor={boxHeaderColor}>{box3Header}</ServicesH2>
					<ServicesP boxTextColor={boxTextColor}>{box3Text}</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
};

export default Services
