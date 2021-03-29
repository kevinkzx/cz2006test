import React, {Component} from 'react';
import items from "./Data";

const ParlourContext = React.createContext();

class ParlourProvider extends Component {
	state = {
		parlours: [],
		sortedParlours: [],
		featuredParlours: [],
		loading: true,
		images: []
	};

	//getData

	componentDidMount() {
		let parlours = this.formatData(items);
		let featuredParlours = parlours.filter(parlour => parlour.featured === true);
		//console.log(parlours);
		this.setState({
			parlours,
			featuredParlours,
			sortedParlours: parlours,
			loading: false
		});
	};

	formatData(items) {
		let tempItems = items.map(item => {
			let id = item.sys.id;
			let images = item.fields.images;
			let parlour = {...item.fields, images, id};
			return parlour;
		});
		return tempItems;
	}

	getParlour = (slug) => {
		let tempParlours = [...this.state.parlours];
		const parlour = tempParlours.find((parlour) => parlour.slug === slug);
		return parlour;
	}

	render() {
		return (
			<ParlourContext.Provider value={{...this.state, getParlour: this.getParlour}}>
				{this.props.children}
			</ParlourContext.Provider>
		);
	}
}


const ParlourConsumer = ParlourContext.Consumer;

export {ParlourProvider, ParlourConsumer, ParlourContext};

