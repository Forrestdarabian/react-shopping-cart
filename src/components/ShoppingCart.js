import React from 'react';

// Components
import Item from './ShoppingCartItem';
import { useContext }  from 'react';
import CartContext from '../contexts/CartContext';
import setCart from '../App'


const ShoppingCart = () => {
	const { cart } = useContext(CartContext);
	const removeItem = id => {
		setCart(cart.filter(item => item.id !== id))
	}
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};


	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
