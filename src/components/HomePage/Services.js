import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
import Title from "../Title";

class Services extends Component {
	state = {
		services: [
			{
				id: 1,
				icon: <FaDolly />,
				title: "free shipping",
				text:
					"                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ratione facere iusto temporibus architecto maxime labore reiciendis expedita nobis quisquam rerum dolorum deserunt, dolores doloribus recusandae eligendi id hic voluptatibus.",
			},
			{
				id: 2,
				icon: <FaRedo />,
				title: "30 days return policy",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ratione facere iusto temporibus architecto maxime labore reiciendis expedita nobis quisquam rerum dolorum deserunt, dolores doloribus recusandae eligendi id hic voluptatibus.",
			},
			{
				id: 3,
				icon: <FaDollarSign />,
				title: "secured payment",
				text:
					"                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ratione facere iusto temporibus architecto maxime labore reiciendis expedita nobis quisquam rerum dolorum deserunt, dolores doloribus recusandae eligendi id hic voluptatibus.",
			},
		],
	};
	render() {
		return (
			<ServicesWrapper className="py-5">
				<Title title="our promise " center="true" />
				<div className="container">
					<div className="row">
						{this.state.services.map((item) => {
							return (
								<div
									className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
									key={item.id}
								>
									<div className="service-icon">{item.icon}</div>
									<div className="mt-3 text-capitalize">{item.title} </div>
									<div className="mt-3">{item.text}</div>
								</div>
							);
						})}
					</div>
				</div>
			</ServicesWrapper>
		);
	}
}

export default Services;
const ServicesWrapper = styled.section`
	background: var(--main-white);
	.service-icon {
		font-size: 2.5rem;
		color: var(--primary-RGBA);
	}
	p {
		color: var(--main-black);
	}
`;
