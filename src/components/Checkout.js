import React from 'react';

function Checkout({ cart, clearCart, setShowModal, setModalMessage }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalMessage('Your order has been placed successfully!');
    setShowModal(true);
    clearCart();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-center fw-bold mb-4">Complete Your Order</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-sm p-4 rounded">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" required />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Delivery Address</label>
          <textarea className="form-control" rows="3" required></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Delivery Time</label>
          <select className="form-select" required>
            <option value="">Select time</option>
            <option>As soon as possible</option>
            <option>In 30 minutes</option>
            <option>In 1 hour</option>
          </select>
        </div>

        <h5 className="fw-bold mt-4 mb-3">Order Summary</h5>
        <ul className="list-group mb-3">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between">
              <span>{item.name} x{item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-between fw-bold mb-3">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button type="submit" className="btn btn-success w-100">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
