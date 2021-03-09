import img1 from "../../images/svg-1.svg"

export const homeObjOne = {
	id: 'about',
	lightBg: false,
	lightText: true,
	lightTextDesc: true,
	topLine: 'Packages',
	headline: 'Take a look at the packages available',
	description: 'Get access to our exclusive website that allows you to choose the package most suited for your' +
		' family',
	buttonLabel: 'View Package',
	imgStart: false,
	img: img1,
	alt: 'Car',
	dark: true,
	primary: true,
	darkText: false
};

export const homeObjTwo = {
	id: 'about',
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: 'Parlours',
	headline: 'Take a look at the parlours that partnered with us',
	description: 'Get access to our exclusive website that allows you to choose the services most suited for your' +
		' family',
	buttonLabel: 'View Parlours',
	imgStart: true,
	img: img1,
	alt: 'Car',
	dark: false,
	primary: false,
	darkText: true
};
