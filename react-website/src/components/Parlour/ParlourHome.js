import React, {Component} from 'react';
import {ParlourContext} from './context';
import Parlour from './Parlour';

export default class ParlourHome extends Component {
	static contextType = ParlourContext;

	render() {
		//const value = this.context;
		//console.log(value);

		//destructure the whole context
		//const {name, greeting} = this.context;

		let {featuredParlours: parlours} = this.context;
		//console.log(parlours);
		parlours = parlours.map(parlour => {
			return <Parlour key={parlour.id}
			                parlour={parlour}/>
		});


		return (
			<section className="featured-rooms">
				<div className="featured-rooms-center">
					{parlours}
				</div>
			</section>
		)
	}
}
