import React, { Component } from "react";
import { LinkData } from "./LinkData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		links: LinkData,
		sidebarOpen: false,
		cartOpen: false,
		sortProducts: [],
		featuredProducts: [],
		singleProduct: {},
		cartItems: 0,
		bestSellers: [],
	};
	handleSidebar = () => {
		this.setState({
			sidebarOpen: !this.state.sidebarOpen,
		});
	};
	handleCart = () => {
		this.setState({
			cartOpen: !this.state.cartOpen,
		});
	};
	openCart = () => {
		this.setState({
			cartOpen: true,
		});
	};
	closeCart = () => {
		this.setState({
			cartOpen: false,
		});
	};
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleSidebar: this.handleSidebar,
					handleCart: this.handleCart,
					openCart: this.openCart,
					closeCart: this.closeCart,
				}}
			>
				{" "}
				{this.props.children}{" "}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
