import React from 'react';

const menuItems = [
  { id: 1, name: 'Bruschetta Trio', category: 'appetizers', price: 12.99, emoji: '🍅' },
  { id: 2, name: 'Calamari Fritti', category: 'appetizers', price: 14.99, emoji: '🦑' },
  { id: 3, name: 'Margherita Pizza', category: 'mains', price: 16.99, emoji: '🍕' },
  { id: 4, name: 'Tiramisu', category: 'desserts', price: 9.99, emoji: '🍰' },
  { id: 5, name: 'Cappuccino', category: 'drinks', price: 4.99, emoji: '☕' },
];

function Menu({ addToCart }) {
  return (
    <div>
      <h2 className="text-center fw-bold mb-4">Our Menu</h2>
      <div className="row">
        {menuItems.map((item) => (
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

export default Menu;
