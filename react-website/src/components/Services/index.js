import React from 'react';

import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP
} from './ServicesElements';

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
	                  box2Header,
	                  box2Text,
	                  box2Img,
	                  box2Alt,
	                  box3Header,
	                  box3Text,
	                  box3Img,
	                  box3Alt
                  }) => {

	return (
		<ServicesContainer id={id}
		                   backgroundColor={backgroundColor}>
			<ServicesH1 headerColor={headerColor}>{header}</ServicesH1>
			<ServicesWrapper>
				<ServicesCard boxColor={boxColor}>
					<ServicesIcon src={box1Img} alt={box1Alt}/>
					<ServicesH2 boxHeaderColor={boxHeaderColor}>{box1Header}</ServicesH2>
					<ServicesP boxTextColor={boxTextColor}>{box1Text}</ServicesP>
				</ServicesCard>
				<ServicesCard boxColor={boxColor}>
					<ServicesIcon src={box2Img} alt={box2Alt}/>
					<ServicesH2 boxHeaderColor={boxHeaderColor}>{box2Header}</ServicesH2>
					<ServicesP boxTextColor={boxTextColor}>{box2Text}</ServicesP>
				</ServicesCard>
				<ServicesCard boxColor={boxColor}>
					<ServicesIcon src={box3Img} alt={box3Alt}/>
					<ServicesH2 boxHeaderColor={boxHeaderColor}>{box3Header}</ServicesH2>
					<ServicesP boxTextColor={boxTextColor}>{box3Text}</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
};

export default Services
