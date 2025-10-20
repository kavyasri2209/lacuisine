import React from 'react';

function SuccessModal({ message, closeModal }) {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 9999 }}>
      <div className="bg-white p-5 rounded text-center shadow">
        <div className="display-4 mb-3 text-success">✅</div>
        <h4 className="fw-bold mb-2">Success!</h4>
        <p className="text-muted mb-4">{message}</p>
        <button className="btn btn-danger" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
