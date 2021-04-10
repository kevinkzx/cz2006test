import React, {useContext} from 'react'
import ParlourContext from "../Context/ParlourContext";

const ParlourFilter = () => {
	const {setSearch} = useContext(ParlourContext);
	return (
		<div>
			<input type="text"
			       placeholder="Search"
			       onChange={e => setSearch(e.target.value)}/>
		</div>

	)
}

export default ParlourFilter;
