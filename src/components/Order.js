import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Bruschetta Trio', category: 'appetizers', price: 12.99, emoji: '🍅' },
  { id: 2, name: 'Calamari Fritti', category: 'appetizers', price: 14.99, emoji: '🦑' },
  { id: 3, name: 'Margherita Pizza', category: 'mains', price: 16.99, emoji: '🍕' },
  { id: 4, name: 'Lasagna', category: 'mains', price: 17.99, emoji: '🍝' },
  { id: 5, name: 'Tiramisu', category: 'desserts', price: 9.99, emoji: '🍰' },
  { id: 6, name: 'Cappuccino', category: 'drinks', price: 4.99, emoji: '☕' },
];

function Order({ addToCart }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  return (
    <div>
      <h2 className="text-center fw-bold mb-4">Order Now</h2>

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {['all', 'appetizers', 'mains', 'desserts', 'drinks'].map((cat) => (
          <button
            key={cat}
            className={`btn ${filter === cat ? 'btn-danger' : 'btn-outline-danger'} rounded-pill`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="row">
        {filteredItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 mb-3">{item.emoji}</div>
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="text-muted">${item.price.toFixed(2)}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
