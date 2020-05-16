import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../components/Context";

export default function Footer() {
	return (
		<ProductConsumer>
			{(value) => {
				const { social } = value;
				return (
					<FooterWrapper>
						<div className="footer-container">
							<h1 className="logo">Gee Swagg</h1>
							{social.map((item) => {
								return (
									<div key={item.id} className="social-media">
										<a href={item.url}> {item.icon} </a>
									</div>
								);
							})}
							<p className="right-text">
								{" "}
								@ 2020 Created by OshunsDesigns all rights reserved
							</p>
							<div className="right-col">
								<h1>our newsletter</h1>
								<div className="border"></div>
								<p>enter your email to get our news and update</p>
								<form action="" className="newsletter-form">
									<input
										type="text"
										className="txtb"
										placeholder="enter your email"
									/>
									<input type="submit" className="btn" value="submit"></input>
								</form>
							</div>
						</div>
					</FooterWrapper>
				);
			}}
		</ProductConsumer>
	);
}
const FooterWrapper = styled.div`
	background-color: var(--main-black);
	color: var(--main-white);
	padding: 90px 0;
	padding-left: 20px;

	.footer-container {
		margin: auto;

		padding: 0px, 2px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap-reverse;
	}
	.logo {
		font-family: var(--gugi);
		color: var(--primary-color);
		padding-left: 20px;
	}
	.social-media {
		margin: 20px 0;
	}
	.social-media a {
		color: var(--main-white);
		margin-right: 25px;
		font-size: 22px;
		text-decoration: none;
		transition: 0.3s linear;
	}
	.social-media a:hover {
		color: var(--text-color);
	}
	.right-col h1 {
		font-size: 26px;
	}
	.border {
		width: 100px;
		height: 4px;
		background-color: var(--text-color);
	}
	.newsletter-form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.txtb {
		flex: 1;
		padding: 18px 40px;
		font-size: 16px;
		color: #293043;
		border: none;
		background: #ddd;
		font-weight: 700;
		outline: none;
		border-radius: 30px;
		min-width: 260px;
	}
	.btn {
		padding: 18px 40px;
		font-size: 16px;
		color: var(--text-color);
		border: none;
		background: #ddd;
		font-weight: 700;
		outline: none;
		border-radius: 30px;
		min-width: 20px;
		margin: 20px 10px;
		cursor: pointer;
		transition: opacity 0.3s linear;
	}
	.btn:hover {
		opacity: 0.7;
		color: var(--text-color);
	}
	.page-content {
		min-height: 100vh;
		font-size: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media screen and(max-width:960px) {
		.footer-container {
			max-width: 600px;
		}
		.right-col {
			width: 100%;
			margin-bottom: 60px;
		}
		.left-col {
			width: 100%;
			text-align: center;
		}
	}
	@media screen and(max-width:700px) {
		.btn {
			margin: 0;
			width: 100%;
			margin-top: 20px;
		}
	}
`;
