import React from "react";
import styled from "styled-components";

export default function Navbar() {
	return (
		<HeadBannerWrapper>
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-12 col-12">
						<div className="btn-group">
							<button className="btn border dropdown-toggle my-md-4 my-2 text-white">
								Usd
							</button>
						</div>
					</div>
					<div className="col-md-4 col-12 text-center">
						<h2 className=" my-md-3 site-title text-white"> Gee Swag</h2>
					</div>
					<div className="col-md-4 col-12 text-right">
						<p className="my-md-4 header-links">
							<a href="#" className="px-2">
								Sign in
							</a>
							<a href="#" className="px-1">
								Create an account
							</a>
						</p>
					</div>
				</div>
			</div>
		</HeadBannerWrapper>
	);
}
const HeadBannerWrapper = styled.nav`
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
	.main-link {
		padding: 0.5rem 1rem;
		background: var(--primaryColor);
		color: var(--primary-color);

		text-transform: uppercase;
		letter-spacing: var(--mainSpacing);
		outline: 2px solid var(--primaryColor);
		outline-offset: 4px;
		border: none;
		transition: var(--mainTransition);
	}
	.nav-icon {
		font-size: 1.5rem;
		cursor: pointer;
	}
`;
