import axios from "axios";
import React, { useEffect, useState } from "react";
import BotanicCard from "./BotanicCard";

const BotanicGarden = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		// Axios comme Fetch sans le res.json
		axios.get("https://pokeapi.co/api/v2/ability/pikachu").then((res) => {
			setData(res.data);
			console.log(res.data);
		});
	}, []);
	return (
		<div className="countries">
			<ul>
				{data.map((plant, index) => (
					<BotanicCard key={index} plant={plant} />
				))}
			</ul>
		</div>
	);
};

export default BotanicGarden;
