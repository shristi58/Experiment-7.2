import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="container">
      <h1>My Shop</h1>
      <ProductList />
      <Cart />
    </div>
  );
}
