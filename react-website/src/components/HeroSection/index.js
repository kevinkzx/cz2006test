import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from './HeroElements';
import {Button, ButtonScroll} from '../ButtonElements';

const HeroSection = ({HeroHeader, HeroPara, getStartedButton, scroll}) => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover)
	};


	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay
				         loop
				         muted
				         src={Video}
				         type='video/mp4'/>
			</HeroBg>
			<HeroContent>
				<HeroH1>{HeroHeader}</HeroH1>
				<HeroP>
					{HeroPara}
				</HeroP>
				<HeroBtnWrapper>
					{scroll ? <ButtonScroll to={getStartedButton}
					                        onMouseEnter={onHover}
					                        onMouseLeave={onHover}
					                        primary="true"
					                        dark="true"
					>
						Get started {hover ? <ArrowForward/> : <ArrowRight/>}
					</ButtonScroll> : <Button to={getStartedButton}
					                          onMouseEnter={onHover}
					                          onMouseLeave={onHover}
					                          primary="true"
					                          dark="true"
					>
						Get started {hover ? <ArrowForward/> : <ArrowRight/>}
					</Button>}

				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Get your funeral services here today.</HeroH1>
                <HeroP>
                    Book ur services here right now.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection
