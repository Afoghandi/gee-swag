import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import BestSelllers from "../components/HomePage/BestSellers";

export default function HomePage() {
	return (
		<div>
			<Hero title="Ginger your swagger" max="true">
				<button className="btn btn-light px-5 py-2">
					{" "}
					<Link to="/product"> shop now </Link>{" "}
				</button>{" "}
			</Hero>{" "}
			<Services />
			<Featured />
			<BestSelllers />
		</div>
	);
}
