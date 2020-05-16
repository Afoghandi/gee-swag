import React from "react";
import { ProductConsumer } from "../Context";
import ProductDisplay from "../ProductDisplay";
import { Link } from "react-router-dom";
import Title from "../Title";

export default function Featured() {
	return (
		<section className="container">
			<Title title="featured " center="true" />
			<div className="row my-5">
				<ProductConsumer>
					{(value) => {
						const { featuredProducts } = value;
						return featuredProducts.map((product) => (
							<ProductDisplay key={product.id} product={product} />
						));
					}}
				</ProductConsumer>
			</div>
		</section>
	);
}
