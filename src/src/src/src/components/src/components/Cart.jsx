import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../store/cartSlice";

export default function Cart() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty</p>}
      {items.map((it) => (
        <div className="cart-item" key={it.id}>
          <div className="name">{it.name} (${it.price})</div>
          <div>
            <input
              type="number"
              min="1"
              value={it.quantity}
              onChange={(e) => {
                const q = Math.max(1, Number(e.target.value) || 1);
                dispatch(updateQuantity({ id: it.id, quantity: q }));
              }}
            />
          </div>
          <div>
            <button onClick={() => dispatch(removeItem({ id: it.id }))}>Remove</button>
          </div>
        </div>
      ))}
      {items.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <strong>Total: ${total}</strong>
        </div>
      )}
    </div>
  );
}
