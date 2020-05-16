import React, { Component } from "react";
import { LinkData } from "./LinkData";
import { items } from "./Data";
import { socialLinks } from "./SocialLinks";

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		links: LinkData,
		social: socialLinks,
		sidebarOpen: false,
		cartOpen: false,
		sortProducts: [],
		filteredProducts: [],
		featuredProducts: [],
		singleProduct: {},
		cartItems: 0,
		cart: [],
		bestsellerProduct: [],
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
		let bestsellerProduct = sortProducts.filter(
			(item) => item.bestseller === true
		);
		this.setState({
			sortProducts,

			featuredProducts,
			bestsellerProduct,
			filteredProducts: sortProducts,
		});
	};

	addToCart = (id) => {
		//store every thing in the cart to a variable
		let tempCart = [...this.state.cart];
		//store everything in the store into a variable
		let tempProducts = [...this.state.sortProducts];
		//find a particular item in the cart and store put in a 'basket'
		let tempItem = tempCart.find((item) => item.id === id);
		//if the cart is empty, look for the item in store
		if (!tempItem) {
			tempItem = tempProducts.find((item) => item.id === id);
			// add the price
			let total = tempItem.price;
			// store the destructured item, start the count as 1 and add the price in a variable
			let cartItem = { ...tempItem, count: 1, total };
			//set everything back into the cart array
			tempCart = [...tempCart, cartItem];
		} else {
			//once we start have items in the cart, we want to count them
			tempItem.count++;
			//re calculate the price
			tempItem.total = tempItem.price * tempItem.count;
			//round it up and turn it from a string
			tempItem.total = parseFloat(tempItem.total.toFixed(2));
		}
		this.setState({
			cart: [...tempCart],
		});
		console.log("been clicked");
	};

	/**Setting single product */
	setSingleProduct = (id) => {
		let product = this.state.sortProducts.find((item) => item.id === id);

		this.setState({
			singleProduct: { ...product },
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
					setSingleProduct: this.setSingleProduct,
					addToCart: this.addToCart,
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
