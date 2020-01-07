import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

const CartContext = createContext();
console.log(CartContext.Provider);

export default CartContext;