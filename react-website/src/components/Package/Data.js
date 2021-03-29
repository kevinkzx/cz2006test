import img1 from "../../images/svg-2.svg";

export default [
	{
		sys: {
			id: "1"
		},
		fields: {
			name: "Package 1",
			slug: "package-1",
			religion: "Buddhist",
			location: "House",
			days: 3,
			transportation: true,
			casket: "Metal",
			eco: true,
			price: 100,
			img : img1
		}
	},{
		sys: {
			id: "2"
		},
		fields: {
			name: "Package 2",
			slug: "package-2",
			religion: "Christian",
			location: "Void Deck",
			days: 2,
			transportation: false,
			casket: "Wooden",
			eco: false,
			price: 500,
			img: img1
		}
	},{
		sys: {
			id: "3"
		},
		fields: {
			name: "Package 3",
			slug: "package-3",
			religion: "Christian",
			location: "Void Deck",
			days: 5,
			transportation: false,
			casket: "Wooden",
			eco: true,
			price: 5000,
			img: img1
		}
	}
];