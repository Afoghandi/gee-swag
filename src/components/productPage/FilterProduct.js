import React from "react";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
export default function FilterProduct() {
	return (
		<ProductConsumer>
			{(value) => {
				const {
					price,
					brand,
					search,
					min,
					max,
					shipping,
					handleChange,
					sortProducts,
				} = value;

				// allow drop down to select one by first creating a new set
				let brands = new Set();
				//add 'all' to the list of brand drop down
				brands.add("all");
				// create a for loop and select and replace the brand in the option drop down
				for (let product in sortProducts) {
					brands.add(sortProducts[product]["brand"]);
				}
				brands = [...brands];
				return (
					<div className="row my-5">
						<div className="col-10 mx-auto">
							<FilterWrapper>
								{/**text search */}
								<div>
									<label htmlFor="search">search products</label>
									<input
										text="text"
										name="search"
										id="search"
										onChange={handleChange}
										value={search}
										className="filter-item"
									></input>
								</div>
								{/**end of text search */}
								{/** category search */}
								<div>
									<label htmlFor="brand">Brand </label>
									<select
										name="brand"
										id="brand"
										className="filter-item"
										onChange={handleChange}
										value={brand}
									>
										{brands.map((brand, id) => {
											return (
												<option key={id} value={brand}>
													{brand}
												</option>
											);
										})}
									</select>
								</div>
								{/** end of category search */}
								{/** price range */}
								<div>
									<label htmlFor="price">
										<p className="mb-2">
											search by price:
											<span>£{price} </span>
										</p>
									</label>
									<input
										type="range"
										name="price"
										id="price"
										min={min}
										max={max}
										className="filter-price"
										value={price}
										onChange={handleChange}
									></input>
								</div>

								{/**free shipping */}
								<div>
									<label htmlFor="shipping" className="mx-2">
										free shipping
									</label>
									<input
										type="checkbox"
										name="shipping"
										id="shipping"
										onChange={handleChange}
										checked={shipping && true}
									></input>
								</div>

								{/**end of free shipping */}
							</FilterWrapper>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
}
const FilterWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
	label {
		font-weight: bold;
		text-transform: capitalize;
	}

	.filter-item,
	.filter-price {
		display: block;
		background: transparent;
		border-radius: 0.5rem;
		border: 4px solid var(--primary-color);
	}
`;
