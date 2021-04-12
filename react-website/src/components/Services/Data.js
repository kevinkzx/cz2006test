// false = black, true = white
import Icon1 from '../../images/image4.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/image7.svg';
import Icon4 from '../../images/image1.svg';
import Icon5 from '../../images/image5.svg';
import Icon6 from '../../images/image6.svg';

export const InformationObj = {
	id: 'information',
	backgroundColor: true,
	headerColor: false,
	boxColor: false,
	boxHeaderColor: true,
	boxTextColor: true,
	header: "Information",
	box1Header: "Funeral Process",
	box1Text: "Click here to view procedure on the funeral process",
	box1Img: Icon1,
	box1Alt: "icon1",
	box1Path: "/funeral_process",
	box2Header: "Void Deck Booking",
	box2Text: "Click here to view procedure on booking a void deck ",
	box2Img: Icon4,
	box2Alt: "icon4",
	box2Path: "/void_deck_booking",
	box3Header: "Cremation or Burial",
	box3Text: "Click here to view information on cremation or burial",
	box3Img: Icon5,
	box3Alt: "icon5",
	box3Path: "/cremation_burial"

}

export const MapObj = {
	id: 'location',
	backgroundColor: false,
	headerColor: true,
	boxColor: true,
	boxHeaderColor: false,
	boxTextColor: false,
	header: "Map",
	box1Header: "Parlours",
	box1Text: "Click here to view locations of parlours",
	box1Img: Icon6,
	box1Alt: "icon6",
	box1Path: "/parlours",
	box2Header: "Burial and Cremation Sites",
	box2Text: "Click here to view locations of burial and cremation sites",
	box2Img: Icon3,
	box2Alt: "icon3",
	box2Path: "/burialAndCremation",
	box3Header: "Ash Scattering Locations",
	box3Text: "Click here to view locations of ash scattering locations",
	box3Img: Icon2,
	box3Alt: "icon2",
	box3Path: "/ashScattering",

}
