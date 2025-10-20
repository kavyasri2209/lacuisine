import React from 'react';

function Cart({ cart, removeFromCart, clearCart, setSection }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2 className="text-center fw-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center p-5 bg-light rounded">
          <h4>Your cart is empty 🛒</h4>
          <button className="btn btn-danger mt-3" onClick={() => setSection('menu')}>
            Browse Menu
          </button>
        </div>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.name} (x{item.qty})</span>
                <span>
                  ${(item.price * item.qty).toFixed(2)}{' '}
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <h5>Total: ${total.toFixed(2)}</h5>
            <div>
              <button className="btn btn-secondary me-2" onClick={clearCart}>Clear</button>
              <button className="btn btn-success" onClick={() => setSection('checkout')}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
