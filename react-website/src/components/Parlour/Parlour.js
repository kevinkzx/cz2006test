import React from 'react';
//link so we can link to specific room page
import {Link} from 'react-router-dom';
import styles from './parlour.module.css';
import PropTypes from "prop-types";


const Parlour = ({parlour}) => {
	//console.log(parlour);
	const {name, slug, images, price} = parlour;

	//destructure and return

	return (

		<article className={styles.room}>
			<div className={styles.imgContainer}>
				{/* img src={images} then i go into data.js and change the image
                for now i am using all default image first
                */}
				<img src={images}
				     alt="parlour image"/>
				{/*
                <div className={styles.priceTop}>
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                */}
				<Link to={`/parlour/${slug}`}
				      className={styles.roomLink}>
					Description
				</Link>
			</div>
			<p className={styles.parlourInfo}>{name}</p>
		</article>
	);
};

Parlour.propTypes = {
	parlour: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
};

export default Parlour;
