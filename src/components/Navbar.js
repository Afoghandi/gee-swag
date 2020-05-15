import React from "react";
import { ProductConsumer } from "./Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

export default function Navbar() {
	return (
		<ProductConsumer>
			{(value) => {
				const { links, handleSidebar, cartItems, openCart } = value;
				return (
					<NavWrapper className="container-fluid p-0">
						<nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarNavAltMarkup"
								aria-controls="navbarNavAltMarkup"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
								{links.map((item) => {
									return (
										<li key={item.id} class="navbar-nav">
											<Link to={item.path} className="nav-item nav-link ">
												{item.name} <span class="sr-only">(current)</span>
											</Link>
										</li>
									);
								})}
							</ul>
							<div className="navbar-nav">
								<li className="nav-item  mx-2 search-icon">
									<FaSearch />
								</li>
								<div className="nav-cart">
									<li className="nav-item border rounded-circle mx-2 basket-icon">
										<FaShoppingBasket onClick={openCart} />
										<div className="cart-items">{cartItems}</div>
									</li>
								</div>
							</div>
						</nav>
					</NavWrapper>
				);
			}}
		</ProductConsumer>
	);
}
const NavWrapper = styled.nav`
	background-color: var(--primary-color);
	font-family: var(--roboto);
	.site-title {
		font-family: var(--gugi);
	}
	.container .dropdown-toggle,
	.container.dropdown-item {
		font-size: 0.7rem;
	}
	a {
		font-size: 0.9rem;
		text-decoration: none;
		color: white;
	}

	.nav-icon {
		font-size: 1.5rem;
		cursor: pointer;
	}
	.navbar-nav {
		padding: 0.8em 0em;
	}
	.navbar-nav .nav-link {
		font-size: 0.9em;
		padding: 0.5rem 1rem;
		text-transform: uppercase;
		color: var(--light-gray) !important;
	}
	.navbar-nav .nav-item .nav-link {
		padding: 0 1.3em;
		cursor: pointer;
	}
	.navbar-nav .basket-icon {
		margin-right: 6.5rem !important;
	}
	.nav-cart {
		position: relative;
		cursor: pointer;
	}
	.cart-items {
		background: var(--primary-color);
		color: var(--main-white) !important;
		font-size: 0.85rem;
		position: absolute;
		top: -8px;
		right: 100px;
		padding: 0 5px;
		border-radius: 50%;
	}
`;
