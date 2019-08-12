import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

const ProductContext = createContext();
console.log(ProductContext.Provider);

export default ProductContext;