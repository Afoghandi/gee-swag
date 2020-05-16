import React, { Component } from "react";
import { LinkData } from "./LinkData";
import { items } from "./Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		links: LinkData,
		sidebarOpen: false,
		cartOpen: false,
		sortProducts: [],
		filteredProducts: [],
		featuredProducts: [],
		singleProduct: {},
		cartItems: 0,
		cart: [],
		bestSellers: [],
	};
	componentDidMount() {
		this.setProducts(items);
	}
	setProducts = (product) => {
		let sortProducts = product.map((item) => {
			let { id } = item.sys;
			let image = item.fields.image.fields.file.url;
			let products = { id, ...item.fields, image };
			return products;
		});
		let featuredProducts = sortProducts.filter(
			(item) => item.featured === true
		);
		this.setState({
			sortProducts,
			featuredProducts,
			filteredProducts: sortProducts,
		});
	};
	/**Setting single product */
	setSingleProduct = (id) => {
		let tempCart = [...this.state.sortProducts];
		let tempItem = tempCart.find((item) => item.id === id);
		tempCart = { ...tempCart, tempItem };
		this.setState({
			cart: { ...tempCart },
		});
	};

	handleSidebar = () => {
		this.setState({
			sidebarOpen: !this.state.sidebarOpen,
		});
		console.log("i am clicked");
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
