import React from "react";
import { ProductConsumer } from "../Context";
//import PayPalBtn from "./PayPalBtn";

export default function CartTotals({ history }) {
	return (
		<div className="container">
			<div className="row">
				<ProductConsumer>
					{(value) => {
						const { clearCart, subTotal, tax, total } = value;
						return (
							<div className="col text-title text-center my-4">
								<button
									className="btn btn-outline-danger text-capitalize mb-4"
									onClick={clearCart}
								>
									{" "}
									clear cart{" "}
								</button>{" "}
								<h3> subtotal: £{subTotal} </h3> <h3> tax: £{tax} </h3>{" "}
								<h3> Total: £{total} </h3>{" "}
								{/**<PayPalBtn
                        									history={history}
                        									cartTotal={cartTotal}
                        									clearCart={clearCart}
                        							/>*/}{" "}
							</div>
						);
					}}
				</ProductConsumer>{" "}
			</div>{" "}
		</div>
	);
}
