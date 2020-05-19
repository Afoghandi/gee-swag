import React from "react";
import { ProductConsumer } from "./Context";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaBars, FaCartPlus } from "react-icons/fa";

export default function Navbar() {
	return (
		<ProductConsumer>
			{(value) => {
				const {
					links,
					handleSidebar,

					cartItems,
					handleCart,
				} = value;
				return (
					<NavWrapper>
						<div className="logo"> </div>
						<ul className="nav-links">
							{links.map((item) => {
								return (
									<li className="a-tag" key={item.id}>
										<Link className="a-tag" to={item.path}>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
						<div className="nav-icon">
							<FaBars onClick={handleSidebar} />
						</div>
						<div className="nav-icon">
							<Link to="/cartpage/">
								<FaCartPlus className="nav-cart" onClick={handleCart} />
								<div className="cart-items"> {cartItems} </div>
							</Link>
						</div>
					</NavWrapper>
				);
			}}
		</ProductConsumer>
	);
}
const NavWrapper = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: 8vh;
	background-color: var(--primary-color);
	font-family: var(--gugi);
	text-transform: capitalize;

	.nav-links {
		display: flex;
		justify-content: space-around;
		width: 50%;
	}
	.a-tag {
		color: var(--main-white);
		text-decoration: none;
		letter-spacing: 3px;
		font-weight: bold;
		font-size: 14px;
		list-style: none;
	}
	.nav-icon {
		width: 25px;
		height: 15px;
		color: var(--main-white);
		margin: 0px;
		font-size: 1.5rem;
		cursor: pointer;
	}
	@media screen and(max-width:1024px) {
		.nav-links {
			width: 60%;
		}
	}
	@media screen and(max-width:768px) {
		.nav-links {
			position: absolute;
			right: 0px;
		}
	}
	.nav-cart {
		position: relative;
	}
	.cart-items {
		background: var(--primaryColor);
		color: var(--mainWhite);
		font-size: 0.95rem;
		position: relative;
		top: -45px;
		right: -8px;
		padding: 0 5px;
		border-radius: 50%;
	}
`;
