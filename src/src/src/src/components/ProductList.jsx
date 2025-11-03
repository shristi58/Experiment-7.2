import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const products = [
  { id: "p1", name: "Laptop", price: 1200 },
  { id: "p2", name: "Mouse", price: 25 },
  { id: "p3", name: "Keyboard", price: 45 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="products" role="list">
      {products.map((p) => (
        <div className="product-card" key={p.id} role="listitem">
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => dispatch(addItem({ id: p.id, name: p.name, price: p.price }))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
