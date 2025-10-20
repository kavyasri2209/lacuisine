import React from 'react';

function Booking({ setShowModal, setModalMessage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalMessage('Your table has been successfully reserved!');
    setShowModal(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-center fw-bold mb-4">Reserve a Table</h2>

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

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Time</label>
            <select className="form-select" required>
              <option value="">Select time</option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Party Size</label>
          <select className="form-select" required>
            <option value="">Select</option>
            {[...Array(10)].map((_, i) => (
              <option key={i}>{i + 1} people</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Special Requests</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-danger w-100">
          Reserve Table
        </button>
      </form>
    </div>
  );
}

export default Booking;
