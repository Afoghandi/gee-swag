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
		subTotal: 0,
		tax: 0,
		total: 0,
		price: 0,
		brand: "all",
		min: 0,
		search: "",
		shipping: false,
	};
	componentDidMount() {
		this.setProducts(items);
	}
	setProducts = (product) => {
		//store all products in variable
		let sortProducts = product.map((item) => {
			let { id } = item.sys;
			let image = item.fields.image.fields.file.url;
			let products = { id, ...item.fields, image };
			return products;
		});
		// filter through product and find featured
		let featuredProducts = sortProducts.filter(
			(item) => item.featured === true
		);
		// filter through product and find bestsellere
		let bestsellerProduct = sortProducts.filter(
			(item) => item.bestseller === true
		);
		//get max price
		let maxPrice = Math.max(...sortProducts.map((item) => item.price));
		this.setState(
			{
				sortProducts,

				featuredProducts,

				bestsellerProduct,
				filteredProducts: sortProducts,
				price: maxPrice,
				max: maxPrice,
			},
			() => this.addTotals()
		);
	};

	getTotal = () => {
		let subTotal = 0;
		let cartItems = 0;
		this.state.cart.forEach((item) => {
			subTotal += item.total;
			cartItems += item.count;
		});
		subTotal = parseFloat(subTotal.toFixed(2));
		let tax = subTotal * 0.2;
		tax = parseFloat(tax.toFixed(2));
		let total = subTotal + tax;
		total = parseFloat(total.toFixed(2));
		return {
			subTotal,
			cartItems,
			tax,
			total,
		};
	};
	addTotals = () => {
		const totals = this.getTotal();
		this.setState({
			subTotal: totals.subTotal,
			tax: totals.tax,
			cartItems: totals.cartItems,
			total: totals.total,
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
		this.setState(
			{
				cart: [...tempCart],
			},
			() => this.addTotals()
		);
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
	increment = (id) => {
		//get everything from the state and set it as a variable
		let tempCart = [...this.state.cart];
		//find the item selectected by it's id
		const cartItem = tempCart.find((item) => item.id === id);
		//increase the item count by 1
		cartItem.count++;
		//recalculate the total
		cartItem.total = cartItem.count * cartItem.price;
		//turn it back into integer
		cartItem.total = parseFloat(cartItem.total.toFixed(2));
		//update state
		this.setState({ cart: [...tempCart] }, () => {
			//add a callback
			this.addTotals();
		});
	};
	decrement = (id) => {
		let tempCart = [...this.state.cart];
		const cartItem = tempCart.find((item) => item.id === id);
		cartItem.count = cartItem.count - 1;
		if (cartItem.count === 0) {
			this.removeItem(id);
		} else {
			cartItem.total = cartItem.count * cartItem.price;
			cartItem.total = parseFloat(cartItem.total.toFixed(2));
			this.setState(
				{
					cart: [...tempCart],
				},
				() => {
					this.addTotals();
				}
			);
		}
	};
	//
	removeItem = (id) => {
		let tempCart = [...this.state.cart];
		tempCart = tempCart.filter((item) => item.id !== id);
		this.setState(
			{
				cart: [...tempCart],
			},
			() => {
				this.addTotals();
			}
		);
	};
	clearCart = () => {
		this.setState({
			cart: [],
		});
	};
	handleChange = (event) => {
		const name = event.target.name;
		const value =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;
		this.setState(
			{
				[name]: value,
			},
			this.sortData
		);
	};
	sortData = () => {
		const { sortProducts, price, brand, shipping, search } = this.state;
		//create a variable to store price as an integer
		let tempPrice = parseInt(price);
		//get all items from sortProducts
		let tempProducts = [...sortProducts];
		//filter through for price
		tempProducts = tempProducts.find((item) => item.price <= tempPrice);
		//if the box doesn't say 'all' filter for brand
		if (brand !== "all") {
			tempProducts = tempProducts.filter((item) => item.brand === brand);
		}
		//filter shipping
		if (shipping) {
			tempProducts = tempProducts.filter((item) => item.freeShipping === true);
		}
		if (search.length > 0) {
			tempProducts = tempProducts.filter((item) => {
				//in case users uses caps lock
				let tempSearch = search.toLowerCase();
				//start search by first letter till the full length
				let tempTitle = item.title.toLowerCase().slice(0, search.length);
				if (tempSearch === tempTitle) {
					return item;
				}
				let tempBrand = item.brand.toLowerCase().slice(0, search.length);
				if (tempSearch === tempBrand) {
					return item;
				}
			});
		}
		this.setState({ filteredProducts: tempProducts });
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
					addTotals: this.addTotals,
					handleChange: this.handleChange,
					increment: this.increment,
					decrement: this.decrement,
					clearCart: this.clearCart,
					removeItem: this.removeItem,
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
