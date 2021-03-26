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
			// description:
			// 	"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
			// extras: [
			// 	"Plush pillows and breathable bed linens",
			// 	"Soft, oversized bath towels",
			// 	"Full-sized, pH-balanced toiletries",
			// 	"Complimentary refreshments",
			// 	"Adequate safety/security",
			// 	"Internet",
			// 	"Comfortable beds"
			// ],
			// images: [
			// 	{
			// 		fields: {
			// 			file: {
			// 				url: img1
			// 			}
			// 		}
			// 	}
			// ]
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
	}
];