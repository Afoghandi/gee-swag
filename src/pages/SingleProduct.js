import React from "react";
import { ProductConsumer } from "../components/Context";

export default function SingleProduct() {
	return (
		<ProductConsumer>
			{(value) => {
				const { addToCart, singleProduct } = value;
				const { title, image } = singleProduct;
				return (
					<div>
						<h1>
							Hello from single product {title} <img src={image} />
						</h1>
					</div>
				);
			}}
		</ProductConsumer>
	);
}
