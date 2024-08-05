import React from "react";
import "./DeleteModal.css";
import ReactDOM from "react-dom";
function DeleteModal({ submit, cancel,title }) {
  return ReactDOM.createPortal(
    <div className="modal-parent modal-active">
      <div className="delete-modal">
        <h1 className="delete-modal-title">{title}</h1>
        <div className="delete-modal-btns">
          <button
            className="delete-btn delete-modal-acccept-btn"
            onClick={() => submit()}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-reject-btn"
            onClick={() => cancel()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}

export default DeleteModal;
