import React from "react";
import { ProductConsumer } from "../components/Context";

import Hero from "../components/Hero";

import { Link } from "react-router-dom";

export default function SingleProduct() {
	return (
		<>
			<ProductConsumer>
				{(value) => {
					const { singleProduct, addToCart, loading } = value;
					if (loading) {
						console.log("hello from loading");
						return <h1>Product loading...</h1>;
					}
					const { brand, description, id, price, title, image } = singleProduct;

					return (
						<>
							<Hero img={image} title="Choose your swag" />
							<section className="py-5">
								<div className="container">
									<div className="row">
										<div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
											<img src={image} alt="single images" />
										</div>
										<div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
											<h5 className="text-title mb-4">Type:{title} </h5>
											<h5 className="text-capitalize text-muted mb-4">
												{" "}
												Brand:{brand}{" "}
											</h5>
											<h5 className="text-main text-capitalize mb-4">
												price: £{price}
											</h5>
											<p className="text capitalize mt-3 text-title">
												some info about product:
											</p>
											<p>{description} </p>
											<button
												type="button"
												className="main-link btxt"
												style={{ margin: "0.75rem" }}
												onClick={() => {
													addToCart(id);
												}}
											>
												{" "}
												add to cart
											</button>
											<button className="main-link">
												{" "}
												<Link to="/product" className="btxt">
													{" "}
													back to shop{" "}
												</Link>{" "}
											</button>{" "}
										</div>
									</div>
								</div>
							</section>
						</>
					);
				}}
			</ProductConsumer>
		</>
	);
}
