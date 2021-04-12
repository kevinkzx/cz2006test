import React, {useContext} from 'react';
import {
	ListItems,
	MapWrapper,
	ParlourInfor,
	SingleParlourContainer,
	SingleParlourDesc,
	SingleParlourInfo,
} from "./ParlourElement";
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import Map from "./ParlourMapIndex";
import {withScriptjs} from "react-google-maps";
import Title from "./Title";

const SingleParlour = () => {
	const {getParlour} = useContext(ParlourContext);
	let {slug} = useParams();
	const item = getParlour(slug);
	const caskets = item.caskets;
	const GP = item.generalPackages;
	const MapLoader = withScriptjs(Map);
	let googleKey = {REACT_APP_GOOGLE_KEY: `AIzaSyDQqDdByz7RV0721d5rYNfU7HWo98LiTr0`};
	return (
		<div id="parlourInfo">
			<SingleParlourContainer>
				<Title title="Details"/>
				<SingleParlourInfo>
					<SingleParlourDesc>
						<h3>Name:</h3>
						<p>{item.name}</p>
					</SingleParlourDesc>
					<ParlourInfor>
						<h3>Information:</h3>
						<h6>Address : {item.description}</h6>
						<h6>Number : {item.number}</h6>
					</ParlourInfor>
					<ParlourInfor>
						<h3>General Packages:</h3>
						<ListItems>
							{GP.map((item, index) =>
								<li key={index}> - {item}</li>
							)}
						</ListItems>
					</ParlourInfor>
					<ParlourInfor>
						<h3>Caskets:</h3>
						<ListItems>
							{caskets.map((item, index) => (
								<li key={index}> - {item}</li>
							))}
						</ListItems>
					</ParlourInfor>
				</SingleParlourInfo>
			</SingleParlourContainer>
			<MapWrapper>
				<MapLoader
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
						googleKey.REACT_APP_GOOGLE_KEY
					}`}
					loadingElement={<div style={{height: `100%`}}/>}
				/>
			</MapWrapper>
		</div>
	);
};

export default SingleParlour;
