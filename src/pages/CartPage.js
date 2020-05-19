import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import hatBcg from "../images/hatcover.jpg";

export default function CartPage(props) {
	return (
		<>
			<Hero img={hatBcg} /> <CartSection history={props.history} />
		</>
	);
}
