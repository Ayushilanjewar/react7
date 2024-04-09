// Cart.js
import React from "react"
import { useSelector } from "react-redux"

function Cart() {
	const cart = useSelector((state) => state.products.cart)

	return (
		<div>
			<h1>Cart</h1>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	)
}

export default Cart
