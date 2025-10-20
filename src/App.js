import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Order from './components/Order';
import Checkout from './components/Checkout';
import Booking from './components/Booking';
import SuccessModal from './components/SuccessModal';
import './App.css';

function App() {
  const [section, setSection] = useState('menu');
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <div className="bg-light min-vh-100">
      <Navbar setSection={setSection} cartCount={cart.length} />

      <div className="container py-4">
        {section === 'menu' && <Menu addToCart={addToCart} />}
        {section === 'order' && <Order addToCart={addToCart} />}
        {section === 'cart' && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            setSection={setSection}
          />
        )}
        {section === 'checkout' && (
          <Checkout
            cart={cart}
            clearCart={clearCart}
            setShowModal={setShowModal}
            setModalMessage={setModalMessage}
          />
        )}
        {section === 'booking' && (
          <Booking
            setShowModal={setShowModal}
            setModalMessage={setModalMessage}
          />
        )}
      </div>

      {showModal && (
        <SuccessModal
          message={modalMessage}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;
