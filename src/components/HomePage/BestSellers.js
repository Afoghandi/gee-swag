import React from "react";
import { ProductConsumer } from "../Context";
import ProductDisplay from "../ProductDisplay";

import Title from "../Title";

export default function Featured() {
	return (
		<section className="container">
			<Title title="New arrivals " center="true" />
			<div className="row my-5">
				<ProductConsumer>
					{(value) => {
						const { bestsellerProduct } = value;
						return bestsellerProduct.map((product) => (
							<ProductDisplay key={product.id} product={product} />
						));
					}}
				</ProductConsumer>
			</div>
		</section>
	);
}
