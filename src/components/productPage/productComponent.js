import React from "react";
import { ProductConsumer } from "../Context";
import FilterProduct from "./FilterProduct";
import ProductDisplay from "../../components/ProductDisplay";
import Title from "../Title";
export default function productComponent() {
	return (
		<ProductConsumer>
			{(value) => {
				const { filteredProducts } = value;
				return (
					<section className="py-5">
						<div className="container">
							<Title center title="our products" />
							<FilterProduct />
							<div className="row">
								<div className="col-10 mx-auto">
									<div className="text-title">
										Total stock:{filteredProducts.length}
									</div>
								</div>
							</div>
							<div className="row py-5">
								{filteredProducts.length === 0 ? (
									<div className="col text-title text-center">
										sorry no items match your search
									</div>
								) : (
									filteredProducts.map((item) => {
										return <ProductDisplay key={item.id} product={item} />;
									})
								)}
							</div>
						</div>
					</section>
				);
			}}
		</ProductConsumer>
	);
}

/**
 *
 *
 *
 *
 *
 *
 *
 */
