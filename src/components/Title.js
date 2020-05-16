import React from "react";
import styled from "styled-components";

export default function Title({ title, center }) {
	return (
		<TitleWrapper className="row" center={center}>
			<div className="col">
				<h2 className="text-title"> {title} </h2>{" "}
				<div className="title-underline"> </div>{" "}
			</div>{" "}
		</TitleWrapper>
	);
}
const TitleWrapper = styled.div`
	text-align: ${(props) => (props.center ? "center" : "left")};
	font-family: var(--gugi) !important;

	text-transform: capitalize;
	.text-title {
		font-size: 4rem;
		color: var(--text-color);
	}

	.title-underline {
		height: 0.5rem;
		width: 7rem;
		background: var(--primary-color);
		margin: ${(props) => (props.center ? "0 auto" : "0")};
	}
`;
