import React, {useEffect, useState} from 'react'
import Subscription from './Subscription'

function Hotel(props) {

	const [clicked, setClicked] = useState(false);

	if (props.data !== "") {

	return (
		<div className="hotels">
			{props.data.map((hotel) => (
				<div className="hotel" key={hotel.id}>
					<h1>{hotel.name}</h1>
					<button onClick={() => setClicked(clicked === false ? hotel.id : false)}>{clicked === hotel.id ? "Show less" : "Show more"}</button>
					<div className="details">{clicked === hotel.id ? `${hotel.city} (${hotel.stars})` : "" }
					<button>Request more info about {hotel.name}</button>
					<Subscription/>
					</div>
				</div>
			))}
		</div>
	)
}
}

export default Hotel;
