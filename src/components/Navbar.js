import React from 'react';

function Navbar({ setSection, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-danger" href="#home">🍽️ Bella Vista</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navMenu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {['menu', 'order', 'booking', 'cart'].map((section) => (
              <li className="nav-item" key={section}>
                <button
                  className="btn nav-link text-dark"
                  onClick={() => setSection(section)}
                >
                  {section === 'cart'
                    ? <>Cart <span className="badge bg-danger">{cartCount}</span></>
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
