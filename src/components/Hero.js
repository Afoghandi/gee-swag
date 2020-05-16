import React from "react";
import styled from "styled-components";
import mainBcg from "../images/coverjacket.jpg";

export default function Hero({ img, max, title, children }) {
	return (
		<HeroWrapper max={max} img={img}>
			<div className="container-fluid">
				<div className="site-slider">
					<div className="container text-center">
						<div className="row">
							<div className="col-md-7 col-sm-12">
								<h1 className="title"> {title} </h1>{" "}
							</div>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
				{children}
			</div>{" "}
		</HeroWrapper>
	);
}
const HeroWrapper = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--main-white);
	min-height: ${(props) => (props.max ? "80vh" : "60vh")};
	background: linear-gradient(var(--primary-RGBA), var(--primary-RGBA)),
		url(${(props) => props.img}) center/ cover no-repeat;
	.title {
		padding-top: 2rem;
		font-size: 5.8rem;
		text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
		text-transform: uppercase;
		letter-spacing: var(--mainSpacing);
	}
`;
Hero.defaultProps = {
	img: mainBcg,
};
