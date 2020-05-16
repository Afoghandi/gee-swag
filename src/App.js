import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadBanner from "./components/HeadBanner";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import product from "./pages/ProductPage";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<HeadBanner />
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />{" "}
				<Route exact path="/product/" component={product} />{" "}
				<Route exact path="/product/:id" component={SingleProduct} />{" "}
				<Route exact path="/contact/" component={ContactPage} />{" "}
				<Route exact path="/cartpage/" component={CartPage} />{" "}
				<Route component={ErrorPage} />{" "}
			</Switch>{" "}
			<Footer />
		</div>
	);
}

export default App;
