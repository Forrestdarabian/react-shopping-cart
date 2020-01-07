import React from 'react';
import { ShoppingCart, removeItem } from './ShoppingCart';
// function removeItem(){
// 	document.getElementById(button).remove;
// }


const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={props.removeItem} >Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;


